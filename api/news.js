const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.NYTIMES_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching data from NYTimes API:", error.message);
        res.status(500).json({ error: "Failed to fetch data from NYTimes API" });
    }
});


module.exports = router;
