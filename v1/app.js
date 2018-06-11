var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

    var campgrounds = [
        {name:"Salmon Creek", image:"https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b014439df7c57ba5efb7_340.jpg"},
        {name:"Granite Hill", image:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f8c67da5efb7ba_340.jpg"},
        {name:"Enchanged Rock", image:"https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104497f8c67da5efb7ba_340.jpg"}
        ]
        
        
app.get("/", function(req,res){
    res.render("landing")
});

app.get("/campgrounds",function(req,res){
    res.render("campgrounds", {campgrounds : campgrounds});
});

app.get("/campgrounds/new", function(req,res){
    res.render("new");
})

app.post("/campgrounds", function(req,res){
    
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {
        name:name,image:image
    }
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YELP CAMP IS UP!");
});