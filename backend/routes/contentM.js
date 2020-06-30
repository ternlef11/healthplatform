const router = require('express').Router();
let contentMs = require('../models/contentM.model');

router.route('/').get((req, res) => {
  contentMs.find()
    .then(contentM => res.json(contentM))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const cardNum = req.body.cardNum;
  const studyName = req.body.studyName;
  const participationDeadline = req.body.participationDeadline;
  const studyStart = req.body.studyStart;
  const studyEnd = req.body.studyEnd;
  const studyContextBrief = req.body.studyContextBrief;
  const studyContext = req.body.studyContext;
  const studyLocation = req.body.studyLocation;
  const studyAffiliates = req.body.studyAffiliates;
  const studyEmail = req.body.studyEmail;
  const studyContactNumber = req.body.studyContactNumber;
  const studyDocument1 = req.body.studyDocument1;
  const studyDocument2 = req.body.studyDocument2;
  const studyDocument3 = req.body.studyDocument3;
  const studyDocument4 = req.body.studyDocument4;
  const studyDocument5 = req.body.studyDocument5;

  const newcontentMs = new contentMs({
    cardNum,
    studyName,
    participationDeadline,
    studyStart,
    studyEnd,
    studyContextBrief,
    studyContext,
    studyLocation,
    studyAffiliates,
    studyEmail,
    studyContactNumber,
    studyDocument1,
    studyDocument2,
    studyDocument3,
    studyDocument4,
    studyDocument5
  });

router.route('/:id').delete((req, res) => {
  contentMs.findByIdAndDelete(req.params.id)
    .then(() => res.json('Entry deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

  newcontentMs.save()
  .then(() => res.json('Study added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
