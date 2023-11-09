const shortid = require('shortid');
const URL = require('../Models/url');
const { json } = require('express');

async function handelGenerateNewShortURL(req,res)
{
    const body = req.body;
    if(!body.url) return res.status(400).json({error : "url is required"});
    const shortID = shortid();
    await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        visitHistory : []
    });

    return res.json(shortID)
}

async function handelGetVisitHistory(req,res)
{
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({totalclicks : result.visitHistory.length});
}

module.exports = {
    handelGenerateNewShortURL,
    handelGetVisitHistory
}