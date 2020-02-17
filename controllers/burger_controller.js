// **********************************************
// dependencies 
// **********************************************
var express = require("express");
var router = express.Router(); 
var path = require("path");
//var connection = require ("../config/connection.js"); 
var burger = require("../models/burger.js");

// **********************************************
// routes
// **********************************************

// **********************************************
// root route 
// **********************************************

router.get("/", function(req, res) {

   console.log("here i am"); 

   burger.selectWhere("devoured", false, function(data1) {

      burger.selectWhere("devoured", true, function(data2) {

         res.render("index", 
            { readyBurgerList: data1, 
            burgerHistoryList: data2 });

      });    
   });
});

// **********************************************
// **********************************************

router.post("/api/add", function(req, res) {
   console.log("add " + req.body.name);

   burger.insertOne ("burger_name", req.body.name, "devoured", false, function (data){

      res.end();

   });
}); 

// **********************************************
// **********************************************

router.put("/api/update/:id", function(req, res) {
   var id = req.params.id;
   console.log("update id = " + id);

   burger.updateOne ("devoured", true, "id", id, function (data){

      res.end();

   });
});

// **********************************************
// **********************************************

module.exports=router;

