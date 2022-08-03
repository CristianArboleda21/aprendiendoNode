//import { MongoClient } from "mongodb";
const MongoCli = require("mongodb").MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://CrisArbo:madresita123@clusteradsi2364481.zeau8.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("PosCristianArboleda");
    const  vendedores = database.collection("VENDEDORES");

    // create a filter for a movie to update
    const filter = {"cedula":123456789};

    // this option instructs the method to create a document if no documents match the filter
    const options = { upsert: true };

    // create a document that sets the plot of the movie
    const updateDoc = {
      $set: {
        nombre: `Carmelo`
      },
    };

    const result = await vendedores.updateOne(filter, updateDoc, options);
    console.log(result);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
