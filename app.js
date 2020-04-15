const express = require('express');
const app = express();

app.use(express.static('public'));

app.set("views", "views");
app.set("view engine", "ejs");

const galerlijst = require('./data/kunstwerken.json');

app.get("/", function(request, response){
    response.render("home", {
    galerlijst: galerlijst.galerij
    });
});

app.get("/wonderswan-detail", function(request, response){
    response.render("wonderswan-detail", {
      galerlijst: galerlijst.galerij
      });
});

app.get("/galerij", function(request, response){
  response.render("galerij", {
    galerlijst: galerlijst.galerij
  });
});

app.get("/contact", function(request, response){
    response.render("contact");
});

//Instellingen voor Heroku Poort
app.set('port', (process.env.PORT || 5000));  
app.listen(app.get('port'));