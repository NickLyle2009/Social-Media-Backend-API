// **Reaction** (SCHEMA ONLY)
const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema({

    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        max_length: 280
    },
    username: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
      default: Date.now,
        
    },

}

)






// **Schema Settings**:

// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.

module.exports =  reactionSchema