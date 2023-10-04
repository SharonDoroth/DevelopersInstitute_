// const slugify = require('slugify');
// const axios = require('axios');
// const link = slugify('about page','_');
// console.log(link);

// const { getData } = require("./modules/data");
import { getData }from "./modules/data";

// const getData = async (ulr) => {
//     try {
//         const  res = await axios.get(ulr);
//         console.log(res.data)
//     } catch (error){
//         console.log(error);
//     }
// };
getData("https://jsonplaceholder.typicode.com/albums").then((data) =>
  console.log(data)
);