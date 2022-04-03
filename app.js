const express = require("express");
const app = express();
const PORT = 3030;

app.set("view engine", "ejs");

app.get("/", (req, res) =>
{
  res.render("index.ejs");
});

app.listen(PORT, () =>
{
  console.log("listen on port: " + PORT);
});
