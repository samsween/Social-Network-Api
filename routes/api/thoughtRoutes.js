const router = require("express").Router();
const thoughtController = require("../../controller/thoughtController");
router
  .get("/", thoughtController.getAllThoughts)
  .get("/:id", thoughtController.getThoughtById)
  .post("/", thoughtController.createThought)
  .put("/:id", thoughtController.updateThought)
  .delete("/:id", thoughtController.deleteThought)
  .post("/:thoughtId/reactions", thoughtController.addReaction)
  .delete(
    "/:thoughtId/reactions/:reactionId",
    thoughtController.deleteReaction
  );

module.exports = router;
