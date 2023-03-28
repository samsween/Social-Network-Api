const router = require("express").Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controller/userController");

router
  .get("/", getAllUsers)
  .get("/:id", getUserById)
  .post("/", createUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser)
  .post("/:userId/friends/:friendId", addFriend)
  .delete("/:userId/friends/:friendId", removeFriend);

module.exports = router;
