const db = require('../config/connection');
const {
    Dog, Cat, User, Settings
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

};

async function getCatDataFromPetfinderApi() {
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
        const catResponse = await axios({
            url: "https://api.petfinder.com/v2/animals?type=cat&location=78727&distance=10&limit=100",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const catSeedArray = [];
        const catArray = catResponse.data.animals;

        for (let cat of catArray) {

            let organizationResponse = await axios({
                url: `https://api.petfinder.com${cat._links.organization.href}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const catObject = {
                name: cat.name,
                breed: cat.breeds,
                age: cat.age,
                size: cat.size,
                photo: cat.photos,
                gender: cat.gender,
                url: cat.url,
                location: `${cat.contact.address.city}, ${cat.contact.address.state}`,
                description: cat.description,
                spayed: cat.attributes.spayed_neutered,
                house_trained: cat.attributes.house_trained,
                shots: cat.attributes.shots_current,
                description: cat.description,
                organization: organizationResponse.data.organization.name
            }
            catSeedArray.push(catObject);
        }
        return catSeedArray;
    } catch (err) {
        console.log(err);
    }

}

const userSeed = {
    username: 'Testing',
    email: 'test@me.com',
    password: '12345678',
    location: 'Boston',
};



db.once('open', async () => {
    try{
        const dogArray = await getDogDataFromPetfinderApi();
        const catArray = await getCatDataFromPetfinderApi();
        await Dog.deleteMany({});
        await Dog.create(dogArray);
        await Cat.deleteMany({});
        await Cat.create(catArray);
        await User.deleteMany({});
        // await User.create(userSeed);
        await Settings.deleteMany({});
        console.log("Seeded Data!");
        process.exit(0)
    }catch(err) {
        console.log(err);
    }
})