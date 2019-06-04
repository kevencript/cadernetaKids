const mongoose = require("mongoose");
const { Schema } = mongoose;

const childMeasuresSchema = new Schema({
  child: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "childProfile"
  },
  weith: {
    type: mongoose.Schema.Types.Decimal128,
    required: true
  },
  height: {
    type: mongoose.Schema.Types.Decimal128,
    required: true
  }
});

mongoose.model("childMeasures", childMeasuresSchema);
