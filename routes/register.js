const { Router }= require('express');
const User = require('../models/User.js');

const router = Router();

router.post('/', async function(req, res) {
    try {
        var userData = {
            full_name: req.body.full_name,
            id_num: req.body.id_num,
            email: req.body.email,
            password: req.body.password
        }
    
        await User.create(userData)
        res.status(201).json({userData});
    }
    catch(err) {
        console.log(err);
    }
});

router.get('/checkIdNum', async function(req, res) {
    const copy = await User.find({
        id_num: req.query.id_num
    }).exec();

    const exists = copy.length > 0;
    res.json(exists);
});

router.get('/checkEmail', async function(req, res) {
    const copy = await User.find({
        email: req.query.email
    }).exec();

    const exists = copy.length > 0;
    res.json(exists);
});

module.exports = router;