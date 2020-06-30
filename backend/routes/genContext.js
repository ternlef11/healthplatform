const router = require('express').Router();
let genContexts = require('../models/genContext.model');

router.route('/').get((req, res) => {
  genContexts.find()
    .then(genContext => res.json(genContext))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/delete").delete(function(req, res) {
  genContexts.deleteMany({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

router.route('/add').post((req, res) => {
  const appContext = req.body.appContext;
  const genEmail = req.body.genEmail;
  const genPhone = req.body.genPhone;
  const genLocation = req.body.genLocation;

  const newgenContexts = new genContexts({
    appContext,
    genEmail,
    genPhone,
    genLocation,
  });

  newgenContexts.save()
  .then(() => res.json('Study added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
