const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require:true
  },
  ph_number: {
    type: String,
    unique:true,
    require:true
  },
  email : {
    type:String
  },
  requirements : {
    type : String, 
  }
});

module.exports = mongoose.model("Owner", productSchema);