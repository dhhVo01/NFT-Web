import express from "express";
import ejs from "ejs";
import serveStatic from "serve-static";
import path from "path";
const app = express();
const port = 3000;

app.set("view engine","ejs");
app.use(serveStatic(path.join("public")));

app.get("/", function(req, res){
  res.render("index");
})



app.listen(port, function(){
  console.log(`Listen port: ${port}.`);
});
