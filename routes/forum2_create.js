const { Router }= require('express');
const Forum2 = require('../models/Forum2.js');

const router = Router();

router.post('/createForum2', async function(req, res) {
    Forum2.create(req.body);
    req.body.layout = false;
    console.log(req.body);
    res.render('forum2', req.body);
})

module.exports = router;