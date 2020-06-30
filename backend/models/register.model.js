const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerSchema = new Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  first_name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
  last_name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
  user_email: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
  user_address: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
  user_phone: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  user_password: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
  in_studies: {
    type: Array,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Register_a = mongoose.model('register_list', registerSchema);

module.exports = Register_a;
