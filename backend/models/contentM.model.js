
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contentM_Schema = new Schema({
  cardNum: { type: String, required: false },
  studyName: { type: String, required: false },
  participationDeadline: { type: String, required: false },
  studyStart: { type: String, required: false },
  studyEnd: { type: String, required: false },
  studyContextBrief: { type: String, required: false },
  studyContext: { type: String, required: false },
  studyLocation: { type: String, required: false },
  studyAffiliates: { type: String, required: false },
  studyEmail: { type: String, required: false },
  studyContactNumber: { type: String, required: false },
  studyDocument1: { type: String, required: false },
  studyDocument2: { type: String, required: false },
  studyDocument3: { type: String, required: false },
  studyDocument4: { type: String, required: false },
  studyDocument5: { type: String, required: false },
}, {
  timestamps: true,
});

const contentMs = mongoose.model('contentM_new', contentM_Schema);

module.exports = contentMs;
