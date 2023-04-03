const { connect, connection } = require("mongoose");

connect(process.env.MONGO_URI || "mongodb://localhost/social-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
