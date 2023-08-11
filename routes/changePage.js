const { Router }= require('express');
const User = require('../models/User.js');
const Forum1 = require('../models/Forum1.js');
const Forum2 = require('../models/Forum2.js');
const Forum3 = require('../models/Forum3.js');

const router = Router();

router.get('/loadSignIn', async function(req, res) {
    console.log("LOAD SIGN IN");
    res.render('signin');
});

router.get('/loadSignUp', async function(req, res) {
    res.render('signup');
});

router.get('/loadForumHome', async function(req, res) {
    console.log(req.session.name);
    res.render('forum_home');
});

router.get('/loadForumMainPage', async function(req, res) {
    console.log(req.session.name);
    res.render('forum_main_page');
});

router.get('/loadForum1', async function(req, res) {
    const forum1_previews = await Forum1.find().lean().exec();
    console.log(req.session.name);
    res.render('forum1', {forum1_previews});
});
router.get('/loadForum2', async function(req, res) {
    const forum2_previews = await Forum2.find().lean().exec();
    console.log(req.session.name);
    res.render('forum2', {forum2_previews});
});
router.get('/loadForum3', async function(req, res) {
    const forum3_previews = await Forum3.find().lean().exec();
    console.log(req.session.name);
    res.render('forum3', {forum3_previews});
});

module.exports = router;