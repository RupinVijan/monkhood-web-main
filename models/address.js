const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
 
  location: {
    type: String,
    unique:true
  },
  state: {
    type: String,
  },
  pincode: {
    type: String,
  },
  college : {
      type:String
  },
  price :{
      type:String
  },
  floor:{
      type:String
  },
  propertyType:{
      type:String
  },
  owner :{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Owner'
  }
});

module.exports = mongoose.model("address", productSchema);