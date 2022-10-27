const express = require("express");
const cors = require("cors");
const courses = require("./data/courses.json");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  if (id > 0 && id < 7) {
    const course = require(`./data/course-${req.params.id}.json`);
    res.send(course);
  } else res.send(null);
});

app.get("/", (req, res) => {
  res.send(`Server running on port ${port} successfully.`);
});

app.listen(port, () => {
  console.log(`Eduma server is successfully on port ${port}`);
});
