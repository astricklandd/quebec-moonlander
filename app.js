const express = require('express')
const path = require('node:path')
const bodyParser = require('body-parser')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dev-papa:yes123@dev-lab-papa.6opbmby.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

console

app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname, "index.html" )); 
    // res.send('Hello ' + userName + ' from Node/Express/Heroku');
    // res.send(`Hello ${userName} from Node/Express/Heroku with Backticks!`)
    res.send('hello express from inside of client connect')
    // res.render('index', 
    //   { 
    //     userName: userName
    //   }
    //   );
// })
// app.post("/saveToNode", (req, res) => {
//   console.log(req.body);
//   console.group(req.body.userName);
//   res.render('index', { userName: req.body.userName });

// })

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running on port:..." `${process.env.PORT}`));

});

// console.log('in app.js');


client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('connected');
  console.log(err.message);
  res.send('hello express from inside of client connect')
  // perform actions on the collection object
  client.close();
  console.log('console log closed');
});


// Below code should add to my mongo db
// const collection = client.db("sample_mflix").collection("movies");
// const favorite_movies = await collection.find({genres : ["Drama", "Fantasy"]});

