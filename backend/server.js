const express = require("express");
const pets = require("./data/pets.js");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/pets", (req, res) => {
  res.json(pets);
});

// for search function
app.get("/api/pets/:zipcode/:animal/:breed/:maxage", (req, res) => {
  const { zipcode, animal, breed, maxage } = req.params;
  const new_pets = [];
  for (let i = 0; i < pets.length; i++) {
    if (
      pets[i].zipcode === zipcode &&
      pets[i].animal === animal &&
      pets[i].breed === breed &&
      pets[i].age <= maxage
    ) {
      new_pets.push(pets[i]);
    }
  }
  res.json(new_pets);
});

app.get("/api/pets/:id", (req, res) => {
  const pet = pets.find((p) => p._id === req.params.id);
  res.json(pet);
});

const PORT = process.env.PORT || 5002;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
