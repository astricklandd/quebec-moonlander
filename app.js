const express = require('express')
const path = require('node:path')
const bodyParser = require('body-parser')
const app = express()
const { MongoClient, ServerApiVersion, ListIndexesCursor } = require('mongodb');
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
            // console.log('console log closed');
        });;
        // Make the appropriate DB calls
        databasesList = await client.db().admin().listDatabases();
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
        posts = await client.db("sample_guides").collection("planets").find();
        // const indxs = await client.db("sample_guides").collection("planets").indexes();
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

app.get('/retrieve', async function (req, res) {
    try {
        // Connect to the MongoDB cluster
         client.connect(err => {
            const collection = client.db("sample_guides").collection("planets");
            console.log('connected');
            // console.log('console log closed');
    });;
    const database = client.db("sample_guides");
    const collection = database.collection("planets");
    const result = await main().catch(console.error);
    console.log("results: ", result); 



    // ------- TEST ------- ///
    app.get('/', async (req, res) => {
        db.collection('planets').find().toArray()
          .then(results => {
            res.render('index.ejs', { planets: result })
          })
          .catch(/* ... */)
      })
  
      app.post('/planets', (req, res) => {
        planetsCollection.insertOne(req.body)
          .then(result => {
            res.redirect('/')
          })
          .catch(error => console.error(error))
      })
  
      app.post('/planets', (req,res) => {
          console.log(req.body);
      })
  
  
      app.post('/updatePlanets/name', async (req, res) => {
          let result = await planetsCollection.findOneAndUpdate(
          {
              "name": ObjectName(req.params.name)
          },
          {
            $set: {
              name: 'Earth',
              hasRings: 'false'
              }
          }
        )
          .then(result => {
            console.log(result);
            res.redirect('/');
          })
          .catch(error => console.error(error))
      })
  
      app.post('/deletePlanets/:name', async (req, res) => 
      {
          let result = await planetsCollection.findOneAndDelete( 
              {
                "name": ObjectName(req.params.name)
              }
            )
            .then(result => {
              console.log(result); 
              res.redirect('/');
            })
            .catch(error => console.error(error))
          })
      app.listen(process.env.PORT || 3000 , 
          () => console.log("server running..."));
  
    //   })
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    });

    // ------- END TEST ----- ////



    // res.send(`results:  ${result.name}`); 

    // const cursor = collection.find({}, {});
    //     let items = [];
    //     await cursor.forEach(function(doc){
    //         items.push(doc);
    //         console.log(cursor);
    //         console.log(items);
    //     });
    //     res.send(JSON.stringify(items));

    // BELOW 5-6 lines was in my code but now commented out as of 10/11 1:47pm
    // } catch (e) {
    //     console.error(e);
    // } finally {
    //     await client.close();
    // }
    // });


// app.get('/retrieve', (req, res) => {
    // // const uri = "mongodb+srv://dev-papa:yes123@dev-lab-papa.6opbmby.mongodb.net/?retryWrites=true&w=majority";
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    // async function run() { 
    //     try {
    //     await client.connect();
    //     const database = client.db("sample_guides");
    //     const collection = database.collection("planets");
    //     const cursor = collection.find({}, {});
    //     let items = [];
    //     await cursor.forEach(function(doc){
    //         items.push(doc);
    //         console.log(cursor);
    //         console.log(items);
    //     });
    //     res.end(JSON.stringify(items));
    //     } 
    //     catch (error){
    //     console.warn("ERROR: " + error);
    //     if (errCallback) errCallback(error);
    //     } 
    //     finally {
    //     await client.close();
    //     }
    // }
    // run().catch(console.dir);
    // })

//------------//


app.listen(PORT, console.log(`server is running on port: ${PORT}` ));
