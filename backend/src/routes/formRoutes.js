const express = require('express');
const formController = require('../controllers/formController');
const countryController = require('../services/formServices');


const router = express.Router();

router.post('/form', formController.submitForm);
router.get('/countries', async (req, res) => {
    try {
      const countries = await countryController.getCountries();
      res.json(countries);
    } catch (error) {
      console.error('Error fetching countries:', error);
      res.status(500).json({ error: 'Failed to fetch countries' });
    }
  });
  

module.exports = router;
