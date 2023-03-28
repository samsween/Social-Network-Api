const mongoose = require("mongoose");

const Schema = mongoose.Schema;
function formatDate(date) {
  return date.toLocaleDateString();
}
const reaction = new Schema({
  reactionId: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    get: formatDate,
  },
});

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: new Date(),
      get: formatDate,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

module.exports = mongoose.model("Thought", thoughtSchema);
