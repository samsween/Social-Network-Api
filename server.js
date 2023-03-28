const express = require("express");
const db = require("./config/connection");
require("./models/User");
require("./models/Thought");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
