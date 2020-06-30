
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BRCA01_Schema = new Schema({
  user_id: { type: String, required: false },
  role: { type: String, required: false },
  clinic: { type: String, required: false },
  GC: { type: String, required: false },
  nurse: { type: String, required: false },
  MDTcoord: { type: String, required: false },
  demographic: { type: String, required: false },
  epidemiological: { type: String, required: false },
  history: { type: String, required: false },
  comments: { type: String, required: false },
  T0: { type: String, required: false },
  T1: { type: String, required: false },
  T2: { type: String, required: false },
  T3: { type: String, required: false },
  saliva: { type: String, required: false },
  consent: { type: String, required: false },
  consentDetail: { type: String, required: false },
  haveResult: { type: String, required: false },
  callOrEmail: { type: String, required: false },
  receivedResult: { type: String, required: false },
  firstConsultation: { type: String, required: false },
  secondConsultation: { type: String, required: false },
}, {
  timestamps: true,
});

const BRCA01s = mongoose.model('BRCA01_new', BRCA01_Schema);

module.exports = BRCA01s;
