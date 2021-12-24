const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Please Enter a valid name"],
  },
  location: {
    type: String,
    // required: [true, "Please Enter a valid Description"],
  },
  price: {
    type: String,
  },
  state: {
    type: String,
    // required: [true, "Please Enter Product State"]
  },
  pincode: {
    type: String,
    // required: [true, "Enter product pincode"],
  },
  ph_number: {
    type: String,
    // required: [true, "Enter a valid Phone number"],
    // default: 1,
  },
  email : {
    type:String
  },
  requirements : {
    type : String, 
  }
});

module.exports = mongoose.model("Owner", productSchema);