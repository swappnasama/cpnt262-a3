// Importing require modules
const express = require('express');
const app=express();
//response to server
app.use(express.static('./public'));

//404 file not found redirection
app.use(function(req,res){
  res.status(404);
  res.redirect('/404.html');
  
});

// hosting the server
const PORT=process.env.PORT || 3000;
app.listen(PORT,function(){
  console.log(`Listening on port:${PORT}`);
});