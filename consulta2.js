//import { MongoClient } from "mongodb";
const MongoCli = require("mongodb").MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://CrisArbo:madresita123@clusteradsi2364481.zeau8.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("PosCristianArboleda");
    const vendedores = database.collection("VENDEDORES");

    // Query for a movie that has the title 'The Room'
    const query = { "cedula": 123456789 };

    /*const options = {
      // sort matched documents in descending order by rating
      sort: { "imdb.rating": -1 },
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, title: 1, imdb: 1 },
    };*/

    const vendedor = await vendedores.findOne(query);

    // since this method returns the matched document, not a cursor, print it directly
    console.log(vendedor);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
