const express = require("express");
const {handelGenerateNewShortURL}  = require("../../Controllers/url")
const router = express.Router();

// Endpoint to shorten an URL
router.post('/',handelGenerateNewShortURL);

module.exports = router;