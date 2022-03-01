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
},
{
  toJSON: {
    getters: true,
    virtuals: true,
  }
}
);

// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`

// **Schema Settings**:
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
  });

  
// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

const Thought = model('thought', thoughtSchema);

module.exports = Thought;