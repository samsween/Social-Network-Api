const { default: axios } = require("axios");
const Thought = require("./models/Thought");
const User = require("./models/User");

(async () => {
  const userData = await axios.get(
    "https://random-data-api.com/api/v2/users?size=10"
  );
  const users = userData.data.map((user) => {
    return {
      username: user.username,
      email: user.email,
    };
  });
  const thoughtData = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const db = require("./config/connection");
  db.once("open", async () => {
    User.create(users).then(async (dbUserData) => {
      console.log("Users seeded");
      const thoughts = thoughtData.data.slice(0, 14).map((thought) => {
        const randomUser = Math.floor(Math.random() * dbUserData.length);
        return {
          thoughtText: thought.title,
          username: dbUserData[randomUser].username,
          userId: dbUserData[randomUser]._id,
        };
      });

      Thought.create(thoughts).then(async (dbThoughtData) => {
        for (const thought of dbThoughtData) {
          await User.findOneAndUpdate(
            { username: thought.username },
            { $push: { thoughts: thought._id } },
            { new: true }
          );
        }
        console.log("Thoughts seeded");
        db.close();
        process.exit(0);
      });
    });
  });
})();
