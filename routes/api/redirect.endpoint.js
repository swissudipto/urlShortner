const express = require("express");
const URL = require("../../Models/url");
const router = express.Router();

// Endpoint to Redirect from a shorten URL
router.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );
  console.log('Entry'+ entry + 'shortid'+ req.params[1]);
  res.redirect(entry.redirectURL);
});

module.exports = router;
