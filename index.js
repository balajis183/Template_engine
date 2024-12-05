const express = require("express");
const app = express();

const port = 8000;

//configures ejs

// sever is responding the html file

app.set("view engine", "ejs");

// configure views path

app.set("views", "./views");


//configure public folder

app.use(express.static("./public"));

app.get("/", (req, res) => {
  //   res.send("Hello from server");
  res.render("index", {
    title: "EJS Intro",
    name: "Balaji",
  });
});

app.listen(port, () => {
  console.log("Server running on ", port);
});
