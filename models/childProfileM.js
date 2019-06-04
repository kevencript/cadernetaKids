const mongoose = require("mongoose");
const { Schema } = mongoose;

const ChildProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  name: {
    type: String,
    required: true
  },
  middlename: {
    type: String,
    requied: true
  },
  genre: {
    type: String,
    required: true
  },
  birth: {
    type: Date,
    required: true
  },
  picture: {
    type: String,
    required: false
  }
});

mongoose.model("childProfile", ChildProfileSchema);
