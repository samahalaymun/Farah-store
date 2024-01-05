const mongoose = require("mongoose"); // Erase if already required

var addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

//Export the model
module.exports = mongoose.model("Address", addressSchema);
