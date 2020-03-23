const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const passport = require("passport");
const users =require('./routes/users');
const path =require('path')


app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
const db = require("./config/keys").mongoURI;

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI ||db,
    { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true }
  );
  const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
 
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes

const listRouter = require('./routes/list.route');
// app.use('/', listRouter);
// app.use("/", users);

app.use('/list', listRouter);
app.use("/auth", users);
app.use('/', express.static(path.join(__dirname, '/client/build')));


// app.use('/', express.static(path.join(__dirname, '/client/build')));

if(process.env.NODE_ENV==='production'){
  const path=require('path')
  app.get('*',(req,res)=>{
res.sendFile(path.resolve(_dirname,'client','build','index.html'))
  })
}
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});