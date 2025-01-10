const fs = require('fs');
const csv = require('csv-parser');
const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost:27017";
const dbName = "410630452";
const collectionName = "orderlist";



const connectDB = async () => {
    const client = new MongoClient(uri);

    try {
        // 連接到 MongoDB
        await client.connect();
        console.log("成功連接到 MongoDB");


    } catch (error) {
        console.error("發生錯誤：", error);
    }
}
export default connectDB;