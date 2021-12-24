const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
  },
  college: {
    type: String
  },
  budget: {
    type: String,
  },
  ph_number: {
    type: String,
  },
  email : {
    type:String,
  },
  requirements : {
    type : String, 
  }
});

module.exports = mongoose.model("student", productSchema);