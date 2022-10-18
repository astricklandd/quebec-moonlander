const express = require('express')
const path = require('node:path')
const bodyParser = require('body-parser')
const app = express()
const { MongoClient, ServerApiVersion, ListIndexesCursor } = require('mongodb');
const { resourceLimits } = require('node:worker_threads');
const uri = "mongodb+srv://dev-papa:yes123@dev-lab-papa.6opbmby.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

async function main(){
  try {
      // Connect to the MongoDB cluster
        client.connect();
        const collection = client.db("sample_guides").collection("planets");
        console.log('connected');
          // console.log('console log closed');
      
      
      let posts = await collection.find().toArray();
   
      return posts; 
    
  } catch (e) {
      console.error(e);
  } finally {

  }
}


app.get('/', async (req, res) => {
try{

  const result = await main().catch(console.error);
  console.log("results: ", result); 
  // console.log("get / result name: ", result.name); 

  if(!result) return false; 

  res.render('index', { 
    planets: result
  })
 

} catch (e) {
  console.error(e);
} finally {
  //  client.close();
}
});

app.post('/result', async (req, res) => {

  try {
    console.log("req.body: ", req.body.name) 
    client.connect; 
    const collection = client.db("sample_guides").collection("planets");
    await collection.insertOne( { name : req.body.name } );
      
    res.redirect('/');
  }
  catch(e){
    console.log(e)
  }
  finally{
    // client.close
  
  }
}),

app.post('/deletePlanets/:name', async (req, res) => 
{
  try {
    client.connect; 
    const collection = client.db("sample_guides").collection("planets");
    await collection.findOneAndDelete( 
        { name : req.body.name } )
      
        res.redirect('/');
    
      } catch(e){
        console.log(e)
      }
      finally{
        // client.close
      
      }
    })



app.listen(PORT, console.log(`server is running on port: ${PORT}` ));
