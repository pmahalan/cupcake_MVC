const express = require("express");
var exphbs = require("express-handlebars");
var app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//_______________________________________
app.get("/", function(req, res) {
    connection.query("SELECT * FROM cupcake_table;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
      res.render("index", { cakes: data });
    });
  });

// the function above should get the data from the table "cupcake_table" and render it on index.handlebars!

