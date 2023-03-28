const router = require("express").Router();
const {
  addReaction,
  createThought,
  deleteReaction,
  deleteThought,
  getAllThoughts,
  getThoughtById,
  updateThought,
} = require("../../controller/thoughtController");

router
  .get("/", getAllThoughts)
  .get("/:id", getThoughtById)
  .post("/", createThought)
  .put("/:id", updateThought)
  .delete("/:id", deleteThought)
  .post("/:thoughtId/reactions", addReaction)
  .delete("/:thoughtId/reactions/:reactionId", deleteReaction);

module.exports = router;
