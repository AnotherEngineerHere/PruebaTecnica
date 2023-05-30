const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
