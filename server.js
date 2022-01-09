const express = require('express')
const path = require('path')
const cors = require('cors')
var cookieParser = require('cookie-parser')
const fetch = require('node-fetch');
const app = express()
const port = process.env.PORT || 8080;

app.use(cookieParser())

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
  res.status(200);
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(pathname + "/aboutus.html"))
  res.status(200);
})


app.get('/service', (req, res) => {
  res.sendFile(path.join(pathname + "/services.html"))
  res.status(200);
})

app.get('/listyourproperty', (req, res) => {
  res.sendFile(path.join(pathname + "/listyourprop.html"))
  res.status(200);
})

app.get('/rentprop', (req, res) => {
  res.sendFile(path.join(pathname + "/tenantform.html"))
  res.status(200);
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(pathname + "/login.html"))
  res.status(200);
})

app.get('/dashBoardHome', (req, res) => {
  if(req.cookies.name==="admin9599"){
  res.sendFile(path.join(pathname + "/dashboardhome.html"))
  res.status(200);
}
  else if(req.cookies.name==="employee9599"){
  res.sendFile(path.join(pathname + "/EmpDashBoardHome.html"))
  res.status(200);
}
else{
  res.send("Invalid Credentials!!")
}
})

app.get('/dashBoard/admin/students', (req, res) => {
  if(req.cookies.name==="admin9599"){
  res.sendFile(path.join(pathname + "/userHistory.html"))
  res.status(200);
}
else{
  res.send("Invalid Credentials!!")
}
})

app.get('/update/:id', (req, res) => {
  if(req.cookies.name==="admin9599"){
  res.sendFile(path.join(pathname + "/update.html"))
  res.status(200);
}
else{
  res.send("Invalid Credentials!!")
}
})
app.get('/update/owner/:id', (req, res) => {
  if(req.cookies.name==="admin9599"){
  res.sendFile(path.join(pathname + "/updateowner.html"))
  res.status(200);
}
else{
  res.send("Invalid Credentials!!")
}
})
app.get('/add/owner', (req, res) => {
  if(req.cookies.name==="admin9599" || req.cookies.name==="employee9599"){
  res.sendFile(path.join(pathname + "/addowner.html"))
  res.status(200);
}
else{
  res.send("Invalid Credentials!!")
}
})
app.get('/add/tenant', (req, res) => {
  if(req.cookies.name==="admin9599" || req.cookies.name==="employee9599"){
  res.sendFile(path.join(pathname + "/addtenant.html"))
  res.status(200);
}
else{
  res.send("Invalid Credentials!!")
}
})


app.get('/dashBoard/admin/owners', (req, res) => {
  if(req.cookies.name==="admin9599"){
  res.sendFile(path.join(pathname + "/ownerhistory.html"))
  res.status(200);
}
else{
  res.send("Invalid Credentials!!")
}
})

app.get('/logout', (req,res)=>{
  res.cookie("name","").redirect('/login')
})

app.get('/delete/:id', async(req,res)=>{
  try {
    fetch("api/tenantform/product/" + req.params.id , { method: 'DELETE' })
      .then(() => element.innerHTML = 'Delete successful');
res.redirect('/dashBoardHome')
  } catch (error) {
    console.log(error)
  }    
})






app.use('/api/ownerform', require('./routes/ownerform'))
app.use('/api/tenantform', require('./routes/tenantform'))
app.use('/api/contactform', require('./routes/mailing'))
app.use('/api/serviceform', require('./routes/services'))
app.use('/api/loginForm', require('./routes/loginRoutes'))



app.listen(port, () => {
  console.log(`Your app listening at http://localhost:${port}`)
})