const db = require('../config/connection');
const {
    Dog
} = require('../models');
const axios = require('axios');
require('dotenv').config();

async function getDogDataFromPetfinderApi() {
    try {
        const securityResponse = await axios({
            url: "https://api.petfinder.com/v2/oauth2/token",
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: `grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
        });
        const token = securityResponse.data.access_token;
        const dogResponse = await axios({
            url: "https://api.petfinder.com/v2/animals?type=dog&location=78727&distance=10&limit=100",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const dogSeedArray = [];
        const dogArray = dogResponse.data.animals;

        for (let dog of dogArray) {

            let organizationResponse = await axios({
                url: `https://api.petfinder.com${dog._links.organization.href}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const dogObject = {
                name: dog.name,
                breed: dog.breeds,
                age: dog.age,
                size: dog.size,
                photo: dog.photos,
                gender: dog.gender,
                url: dog.url,
                location: `${dog.contact.address.city}, ${dog.contact.address.state}`,
                description: dog.description,
                spayed: dog.attributes.spayed_neutered,
                house_trained: dog.attributes.house_trained,
                shots: dog.attributes.shots_current,
                description: dog.description,
                organization: organizationResponse.data.organization.name
            }
            dogSeedArray.push(dogObject);
        }
        return dogSeedArray;
    } catch (err) {
        console.log(err);
    }

}

db.once('open', async () => {
    const dogArray = await getDogDataFromPetfinderApi();
    await Dog.deleteMany({});
    await Dog.create(dogArray);
    console.log("Seeded Data!");
    process.exit(0)
})