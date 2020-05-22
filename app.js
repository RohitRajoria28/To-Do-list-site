const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const workitems=[];

var items=["BUY FOOD","COOK FOOD","EAT FOOD"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));




 const date=require(__dirname+"/date.js")

 
app.get("/", function(req, res){

  //  var today=new Date();
  //  var options = {
  //    weekday: 'long',
       
  //      month: 'long',
  //       day: 'numeric'
  //      };
  //  var day =  today.toLocaleDateString("en-US",options);

 

 let day=date.getdate();

   res.render("list",{ListTitle:day,newListItems:workitems});

});

app.post("/",function(req,res){
  var item=req.body.newItem;
  if(req.body.list==="work")
  {
    workitems.push(item);
    res.redirect("/work");

  }
  else{
    items.push(item);
    res.redirect("/");
  }


  items.push(item);
 res.redirect("/");
})
app.get("/about",function(req,res){
  res.render("about");
})


app.get("/work",function(req,res){
  res.render("List",{ListTitle:"work list",newListItems:workitems});
})
app.post("/work",function(req,res){
  let item=res.body.newItem;
  workitems.push(item);
  res.redirect("/work");
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
