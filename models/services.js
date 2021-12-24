const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
  },
  membership: {
    type: String
  },
  ph_number: {
    type: String,
  },
  email : {
    type:String,
  },
  services : {
    type : String, 
  }
});

module.exports = mongoose.model("services", productSchema);