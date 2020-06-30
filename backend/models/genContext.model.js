
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const genContext_Schema = new Schema({
  appContext: { type: String, required: false },
  genEmail: { type: String, required: false },
  genPhone: { type: String, required: false },
  genLocation: { type: String, required: false },
}, {
  timestamps: true,
});

const genContexts = mongoose.model('genContext', genContext_Schema);

module.exports = genContexts;
