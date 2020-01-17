const express = require("express");
var exphbs = require("express-handlebars");
var app = express();

var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/cupcake_controller.js");

app.use(routes);

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

//_______________________________________
// app.get("/", function(req, res) {
//     connection.query("SELECT * FROM cupcake_table;", function(err, data) {
//       if (err) {
//         return res.status(500).end();
//       }
//       res.render("index", { cakes: data });
//     });
//   });

// the function above should get the data from the table "cupcake_table" and render it on index.handlebars!

