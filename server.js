const express = require('express');
const app=express();

app.use(express.static('./public'));

const url= require('url');
app.use(function(req,res){
  res.status(404);
  res.redirect('/404.html');
  
});

const PORT=process.env.PORT || 3000;
app.listen(PORT,function(){
  console.log(`Listening on port:${PORT}`);
});