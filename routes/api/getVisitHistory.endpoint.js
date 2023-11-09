const express = require("express");
const {handelGetVisitHistory} = require('../../Controllers/url')

const router = express.Router();

// Endpoint to get the VisitHistory
router.get('/:shortId',handelGetVisitHistory);

module.exports = router;