// "use server"
// import path from 'path';
// import fs from "fs";

import { useFetch } from "../hooks/useFetch";

// const filePathDefault = path.join(process.cwd(), "src", "assets", "jsons");

const getTypeList = async () => {
    // const filePath = path.join(filePathDefault, "types.json");
    // return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return useFetch('https://dahaotran.github.io/Bike-shop/jsons/types.json');
}

const getBikeList = async () => {
    // const filePath = path.join(filePathDefault, "bikes.json");
    // return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return useFetch('https://dahaotran.github.io/Bike-shop/jsons/bikes.json');
}

const getFirmList = async () => {
    // const filePath = path.join(filePathDefault, "firms.json");
    // return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return useFetch('https://dahaotran.github.io/Bike-shop/jsons/firms.json');
}

const getDetailList = async () => {
    // const filePath = path.join(filePathDefault, "bike_details.json");
    // return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return useFetch('https://dahaotran.github.io/Bike-shop/jsons/bike_details.json');
}

export { getTypeList, getBikeList, getFirmList, getDetailList };