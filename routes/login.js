const { Router }= require('express');
const User = require('../models/User.js');

const router = Router();

router.get("/verifyLogInCredentials", async function(req, res) {
    console.log(req.query.email);
    try {
        const copy = await User.find({
            email: req.query.email,
            password: req.query.password
        }, 'email password id_num full_name').exec();
    
        const exists = copy.length > 0;

        console.log(copy[0].email, copy[0].password);

        req.session.idNumber = copy[0].id_num;
        req.session.name = copy[0].full_name;

        console.log(req.session.idNumber);
        
        
        // if(exists){
            
        // }else{
        //     console.log("Error: cannot be found");
        // }

        res.json(exists);
        /*
        const copy = await User.findOne({
            email: req.body.email,
            password: req.body.password
        }).exec();

        let exists = copy.length == 1;
        console.log(exists);
        res.send(exists);
        */


        /*
        console.log(copy);
        console.log(exists);
        const exists = copy.length > 0;
        res.json(exists);
        */
    } catch(err) {
        res.json(false);
    }
});

router.get("/", (req, res) => {
    //testDatabaseConnection();
    return res.render("forum_home");
});

module.exports = router;