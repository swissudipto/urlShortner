const shortid = require('shortid');
const URL = require('../Models/url');
const { json } = require('express');
const isUrl = require('is-url'); 

async function handelGenerateNewShortURL(req,res)
{
    const body = req.body;
    if(!body.url) return res.status(400).json({error : "url is required"});
    const urlCheck = isUrl(body.url);
    if(!urlCheck) return res.status(400).json({error : "url is invalid!"});
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
    if(result==null) return res.status(400).json({error:'Short Id is invalid!' });
    return res.json({totalclicks : result.visitHistory.length});
}

module.exports = {
    handelGenerateNewShortURL,
    handelGetVisitHistory
}