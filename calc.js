const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/" ,function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

  console.log(req.body);
   var num1 = Number(req.body.num1);
   var num2 = Number(req.body.num2);
   var res_q = num1 + num2 ;
   res.send("The result of the calculation is " + res_q);
  });


app.listen(3055);
