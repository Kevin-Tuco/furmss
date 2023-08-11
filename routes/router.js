const { Router }= require('express');
const User = require('../models/User.js');
const Forum1 = require('../models/Forum1.js');

const router = Router();

router.get("/", (req, res) => {
    //testDatabaseConnection();
    return res.render("signup");
});

// async function testDatabaseConnection() {
//     try {
//         const testing = await User.find({
//             email: 'test4@gmail.com',
//             password: 'abcd'
//         }).exec();

//         console.log(testing);
//     } catch (error) {
//         console.error('Error connecting to the database:', error);
//     }
// }



router.get('/getUserName', async function(req, res) {
    console.log(req.session.name);
    res.send(req.session.name);
});

/*
router.post("/login", async (request, response) => {
    try {
        const login = request.body.login;
        const password = request.body.password;

        const usermail = await db.collection('users').findOne({email: login}, (err, res)=> {
            if (res === null) {
                return response.redirect("signin.html");
            }

            else {
                if (res.password === password) {
                return response.redirect("forum_home.html");
                }

                else {
                    return response.redirect("signin.html");
                }
            } 
        })
    } catch(error) {
        response.send("Invalid Login!");
    }
});
*/

module.exports = router;