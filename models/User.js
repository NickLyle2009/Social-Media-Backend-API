const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");
// * `username`
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'User email is required!'],
      //mongoose matching validation
      validate: {
        validator: function(v) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        },
        message: props => `${props.value} is not a valid email!`
      },
    },

    thoughts: [
      {
        //   * Array of `_id` values referencing the `Thought` model
        type: Schema.Types.ObjectId,
        ref: `Thought`,
      },
    ],
    friends: [
      {
        //   * Array of `_id` values referencing the `User` model (self-reference)
        type: Schema.Types.ObjectId,
        ref: `User`,
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);



// **Schema Settings**:

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${this.friends.length}`;
  });

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.

const User = model('user', userSchema);

module.exports = User;