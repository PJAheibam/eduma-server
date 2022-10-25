const express = require("express");
const cors = require("cors");
const courses = require("./data/courses.json");

const app = express();
const port = 5000;

app.use(cors);

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/", (req, res) => {
  res.send(`Server running on port ${port} successfully.`);
});

app.listen(port, () => {
  console.log(`Eduma server is successfully on port localhost:${port}`);
});
