const Form = require('../models/formModels');

exports.submitForm = (req, res) => {
  const { fullName, country } = req.body;

  if (!fullName || !country) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  const form = new Form({ fullName, country });

  form.save((err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    return res.status(200).json({ message: 'Form submitted successfully' });
  });
};
