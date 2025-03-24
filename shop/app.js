const express=require('express');
const app=express();

app.get("/",(req,res)=>{
res.send("<h1>First Application</h1>")
  });
app.listen(8080);

// open the browser and write URL http://localhost:8080/
