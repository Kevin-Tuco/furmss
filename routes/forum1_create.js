const { Router }= require('express');
const Forum1 = require('../models/Forum1.js');

const router = Router();

router.post('/createForum1', async function(req, res) {
    Forum1.create(req.body);
    req.body.layout = false;
    console.log(req.body);
    res.render('forum1', req.body);
});





module.exports = router;