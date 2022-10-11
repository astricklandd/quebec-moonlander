const express = require('express')
const path = require('node:path')
const bodyParser = require('body-parser')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const { resourceLimits } = require('node:worker_threads');
const uri = "mongodb+srv://dev-papa:yes123@dev-lab-papa.6opbmby.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000

  async function main(){
    try {
        // Connect to the MongoDB cluster
         client.connect(err => {
            const collection = client.db("sample_guides").collection("planets");
            console.log('connected');
            console.log('console log closed');
          });;
        // Make the appropriate DB calls
        databasesList = await client.db().admin().listDatabases();
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
        posts = await client.db("sample_guides").collection("planets").findOne();
        // indxs =  await posts.indexes();
        // console.log(indxs);
        console.log(posts); 
        return posts; 
        // return posts.findOne();
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
// main().catch(console.error);
app.get('/', async function (req, res) {
    const result = await main().catch(console.error);
    console.log("results: ", result); 
    res.send(`results:  ${result.name}`); 
    });



    
  
app.listen(PORT, console.log(`server is running on port: ${PORT}` ));
