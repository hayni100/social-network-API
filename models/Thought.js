const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoguhtText: {
    type: String,
    required: true,
    maxlength: 280,
    minlength: 1,
  },
  createdAt :{
    type: Date,
    default: Date.now,
    //getting default date and formatting into M/D/YYYY format
    get: date => date.toLocaleDateString(),
  }
});
