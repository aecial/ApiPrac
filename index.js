const express = require("express");
const app = require("express")();
const PORT = 8080;
const cors = require("cors");
const quotes = require("./quotes.json");
const fs = require("fs");

let arrLength = quotes.quotes.length;
app.listen(PORT, () => {
  console.log(`alive on http://localhost:${PORT}`);
  console.log(arrLength);
});
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/tateQuote", (req, res) => {
  let rand = Math.floor(Math.random() * arrLength) - 1;
  res.status(200).send(quotes.quotes[rand]);
});
app.post("/tateQuote", (req, res) => {
  let NEW = req.body;
  quotes.quotes.push(NEW);
  fs.writeFile("./quotes.json", JSON.stringify(quotes), (err) => {
    console.log(err);
  });
  // let newQuote = JSON.stringify(req.body, null, 2);
  // fs.appendFile("./quotes.json", newQuote, (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("File Write Success");
  //   }
  // });
  res.status(201).send({ requestBody: req.body });
});
