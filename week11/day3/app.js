const slugify = require('slugify');
const axios = require('axios');
const link = slugify('about page','_');
console.log (link);
// const {getData} = require ("./node_modules/app.js");
// getData("https://jsonplaceholder.typicode.com/users");
// const name = 'John John';

const getData = async (url) => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch(error){
        console.log(error);
    }
};
module.exports = {
    getData,
};
getData("https://jsonplaceholder.typicode.com/users").then(a => console.log(a));

// const greeting = (name) => {
//     console.log(`Hello ${name}, welcome to nodejs`);
// };

    // greeting(name);