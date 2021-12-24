const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8000;



const pathname=path.join(__dirname + "/public")


app.use(express.static(pathname))
app.use(cors())
app.use(express.urlencoded({extended:false}))

const mongoose=require('mongoose')
MongoDbURL='mongodb+srv://lms:rupin@cluster0.jbvdn.mongodb.net/monkhood';
mongoose.connect(MongoDbURL);
var db=mongoose.connection;

db.on('error',console.error.bind(console,"Connection error : "))
db.once('open' , function (){
    console.log("Database is Ready.... ")
});



app.use(express.json())


//Normal Routes

app.get('/', (req, res) => {
  res.sendFile(path.join(pathname + "/index.html"))
  res.status(500);
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(pathname + "/aboutus.html"))
  res.status(500);
})


app.get('/service', (req, res) => {
  res.sendFile(path.join(pathname + "/services.html"))
  res.status(500);
})

app.get('/listyourproperty', (req, res) => {
  res.sendFile(path.join(pathname + "/listyourprop.html"))
  res.status(500);
})

app.get('/rentprop', (req, res) => {
  res.sendFile(path.join(pathname + "/tenantform.html"))
  res.status(500);
})








app.use('/api/ownerform', require('./routes/ownerform'))
app.use('/api/tenantform', require('./routes/tenantform'))
app.use('/api/contactform', require('./routes/mailing'))
app.use('/api/serviceform', require('./routes/services'))



app.listen(port, () => {
  console.log(`Your app listening at http://localhost:${port}`)
})