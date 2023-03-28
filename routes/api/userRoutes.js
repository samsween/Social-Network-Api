const router = require("express").Router();
const userController = require("../../controller/userController");

router
  .get("/", userController.getAllUsers)
  .get("/:id", userController.getUserById)
  .post("/", userController.createUser)
  .put("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser)
  .post("/:userId/friends/:friendId", userController.addFriend)
  .delete("/:userId/friends/:friendId", userController.removeFriend);

module.exports = router;
