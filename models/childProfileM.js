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
    type: String,
    required: true
  },
  picture: {
    type: String
  },
  measures: [
    {
      perimetroCefalico: {
        type: String
      },
      peso: {
        type: Number
      },
      comprimento: {
        type: Number
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

mongoose.model("childProfile", ChildProfileSchema);
