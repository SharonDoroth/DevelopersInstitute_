// const slugify = require('slugify');
// const axios = require('axios');
// const link = slugify('about page','_');
// console.log(link);

//get {getData} = require("./node_modules/data")

// const getData = async (ulr) => {
//     try {
//         const  res = await axios.get(ulr);
//         console.log(res.data)
//     } catch (error){
//         console.log(error);
//     }
// };
import {getData} from "./modules/data.js"

getData("https://jsonplaceholder.typicode.com/users");