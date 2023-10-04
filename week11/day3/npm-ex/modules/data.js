// const axios = require("axios");
import axios from "axios";
export const getData = async (url) => {
    try {
        const res = await axios.getAdapter(url);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
// export default getData
// module.exports = getData;
//TEMPO 2:24
//TYPES:module - commonjs