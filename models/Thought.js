const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// **Thought**:
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    max_length: 280,
  },

  createdAt: {
    type: Date,
      default: Date.now,
  
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`

// **Schema Settings**:
userSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
  });

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

const Student = model('thought', thoughtSchema);

module.exports = Thought;