const { Router }= require('express');
const Forum3 = require('../models/Forum3.js');

const router = Router();

router.post('/createForum3', async function(req, res) {
    Forum3.create(req.body);
    req.body.layout = false;
    console.log(req.body);
    res.render('forum3', req.body);
})

module.exports = router;