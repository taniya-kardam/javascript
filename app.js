const express = require('express');
const indexRouter = require('./routes/index.route.js');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
console.log("sever is running")

 app.set ("view engine","ejs");
    app.use(bodyParser.urlencoded({extended:false}));

   const staticFilePath = path.join(__dirname,"public");
  app.use(express.static(staticFilePath));

 app.use(indexRouter);
 app.listen(3000,()=>{
     console.log("servaer");
 });