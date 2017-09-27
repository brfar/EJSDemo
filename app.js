var express = require("express");
var app = express();

//tell express to serve content of the public directory
app.use(express.static("public"));

/* essa linha é para que não precise adicionar .ejs no final de casa pagina dentros das rotas
   posso digitar apenas ("home") ou inves de ("home.ejs") */
app.set("view engine", "ejs");

/*  O método render permite puxar um html ao inves de apenas frases
    Quando usamos express, não usamos plain html e sim ejs
    Todas as páginas precisam estar dentro de um diretório chamado "views"; esse é o diretório que o express vai procurar
*/
app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
  var thing = req.params.thing;
   res.render("love", {thingVar: thing});
   /* {thingVar: thing} é o mesmo que:
      "na página love.ejs a variável thingVar vai corresponder a thing"
   */
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Colt"}
    ];

    res.render("posts", {posts: posts});
})

app.listen(3000, function(){
   console.log("Server is listening!!!");
});
