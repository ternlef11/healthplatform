const router = require('express').Router();
let Register = require('../models/register.model');

router.route('/').get((req, res) => {
  Register.find()
    .then(registers => res.json(registers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const user_id = req.body.user_id;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const user_email = req.body.user_email;
  const user_address = req.body.user_address;
  const user_phone = req.body.user_phone;
  const user_password = req.body.user_password;
  const in_studies = req.body.in_studies;
  const date = Date.parse(req.body.date);

  const newRegister = new Register({
    user_id,
    first_name,
    last_name,
    user_email,
    user_address,
    user_phone,
    user_password,
    in_studies,
    date

    });

  newRegister.save()
    .then(() => res.json('Registered!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
