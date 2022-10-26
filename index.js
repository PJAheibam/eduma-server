require("dotenv").config();
const express = require("express");
const cors = require("cors");
const courses = require("./data/courses.json");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use("/icons", express.static("./assets/icons"));
app.use("/images", express.static("./assets/images"));

app.get("/courses", (req, res) => {
  const data = courses.map((course) => ({
    ...course,
    imageURL: process.env.ROOT_URL + course.imageURL,
  }));
  res.send(data);
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
