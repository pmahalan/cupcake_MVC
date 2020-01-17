var express = require("express");
var router = express.Router();
var cupcake = require("../models/cupcakes.js");

// We need to create all our routes, and set up logic within those routes where required.

// Our routes: get, post and put???

//For context with the cats example: "cat_db" is the database name, 
//"cats" is the table name, "id" is a column, "name" is a column, and "sleeply" is a boolean column.
//
//_______________________________________________________________

// router.get("/", function(req, res) {
//   cat.all(function(data) {
//     var hbsObject = {cats: data};
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });
// From what I understand, the "get" function above puts the data from a cats table  - being assigned to var hbsObject - into the index.handlebars.

//So... for my get method on the landing page, 

// I want to get the data from my table "cupcake_table" to go to the index page.

router.get("/", function(req, res) {
    cupcake.all(function(data) {
        var cakeObject = {cupcake_table: data};
        console.log(cakeObject);
        res.render("index", cakeObject);
    });
});


// router.post("/api/cats", function(req, res) {
//   cat.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

router.post("/api/cakes", function(req, res) {
    cupcake.create(["cupcake_name", "devoured"], [req.body.cupcake_name, req.body.devoured], function(result){
        res.json({ id: result.insertId });
        //send back the ID of the new cupcake???
    });
});
//________________________________________________

// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//   console.log("condition", condition);
//   cat.update(
//     {
//       sleepy: req.body.sleepy
//     },
//     condition,
//     function(result) {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();
//     }
//   );
// });

router.put("/api/cakes/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    cupcake.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});
//this above "put" function will deal with whether or not the cupcake has been devoured!



//_______________________________________________________________
module.exports = router;