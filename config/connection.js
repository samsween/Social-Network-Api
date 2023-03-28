const { connect, connection } = require("mongoose");

connect("mongodb://localhost/social-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
