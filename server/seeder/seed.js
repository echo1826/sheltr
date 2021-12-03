const db = require('../config/connection');
const {
    Dog, User, Settings
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

const userSeed = {
    username: 'Testing',
    email: 'test@me.com',
    password: '12345678',
}

const userSettingsSeed = [{
    user: '61a984b607248b27786045e1',
    age: "Adult",
    size: "Large",
    spayed: true,
    house_trained: true
},
{
    user: '61aa493e8a22806888fa9ea1',
    age: "Young",
    size: "Small",
    spayed: false,
    house_trained: false
}]

db.once('open', async () => {
    try{
        const dogArray = await getDogDataFromPetfinderApi();
        await Dog.deleteMany({});
        await Dog.create(dogArray);
        await User.deleteMany({});
        await User.create(userSeed);
        await Settings.deleteMany({});
        await Settings.create(userSettingsSeed);
        console.log("Seeded Data!");
        process.exit(0)
    }catch(err) {
        console.log(err);
    }
})