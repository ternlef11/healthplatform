const router = require('express').Router();
let BRCA01s = require('../models/BRCA01.model');

router.route('/').get((req, res) => {
  BRCA01s.find()
    .then(BRCA01 => res.json(BRCA01))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const role = req.body.role;
  const user_id = req.body.user_id;
  const demographic = req.body.demographic;
  const epidemiological = req.body.epidemiological;
  const history = req.body.history;
  const comments = req.body.comments;
  const consent = req.body.consent;
  const firstConsultation = req.body.firstConsultation;

  const newBRCA01s = new BRCA01s({
    role,
    user_id,
    demographic,
    epidemiological,
    history,
    comments,
    consent,
    firstConsultation
  });

  newBRCA01s.save()
  .then(() => res.json('Study particpant added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
