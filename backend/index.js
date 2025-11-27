const express = require("express");
const cors = require("cors");
const db = require("./utils/db.js");
const questionRouter = require("./routes/questionRoutes.js");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Database connection
db();

// Routes
app.use("/api/v1/questions", questionRouter)

// Server Start
const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
