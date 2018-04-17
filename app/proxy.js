let path = require('path');
let fs = require('fs');
var User = require('./api/models/user.js');

module.exports = function (app) {
    app.get('/app*', function (req, res) {
        res.sendFile(path.join(__base, '/app/ngApp/dist/index.html'));
    });

// получение списка данных
//     app.get('/api/json/getUsers', function(req, res){
//
//         var content = fs.readFileSync(path.join(__base,'/app/backend/data/user.json'));
//         var users = JSON.parse(content);
//         res.send(users);
//     });


    app.get('/user', (req, res) => {
        User.find((err , user) => {
            res.json({user});
        })
    });

    // app.get('/api/json/getUserByEmail',function (req,res) {
    //
    //     var content = fs.readFileSync(path.join(__base,'/backend/data/user.json'));
    //     var userEmail = JSON.parse(content);
    //     res.send(userEmail);
    //
    // })

    /** Proba***/


//POST route for updating data
//     app.post('/login/postUserData', function (req, res, next) {
//         // confirm that user typed same password twice
//         if (req.body.password !== req.body.passwordConf) {
//             var err = new Error('Passwords do not match.');
//             err.status = 400;
//             res.send("passwords dont match");
//             return next(err);
//         }
//
//         if (req.body.email &&
//             req.body.username &&
//             req.body.password &&
//             req.body.passwordConf) {
//
//             var userData = {
//                 email: req.body.email,
//                 username: req.body.username,
//                 password: req.body.password,
//                 passwordConf: req.body.passwordConf,
//             }
//
//             User.create(userData, function (error, user) {
//                 if (error) {
//                     return next(error);
//                 } else {
//                     req.session.userId = user._id;
//                     return res.redirect('/profile');
//                 }
//             });
//
//         } else if (req.body.logemail && req.body.logpassword) {
//             User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
//                 if (error || !user) {
//                     var err = new Error('Wrong email or password.');
//                     err.status = 401;
//                     return next(err);
//                 } else {
//                     req.session.userId = user._id;
//                     return res.redirect('/profile');
//                 }
//             });
//         } else {
//             var err = new Error('All fields required.');
//             err.status = 400;
//             return next(err);
//         }
//     })
//
// // GET route after registering
//     app.get('/profile', function (req, res, next) {
//         User.findById(req.session.userId)
//             .exec(function (error, user) {
//                 if (error) {
//                     return next(error);
//                 } else {
//                     if (user === null) {
//                         var err = new Error('Not authorized! Go back!');
//                         err.status = 400;
//                         return next(err);
//                     } else {
//                         return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
//                     }
//                 }
//             });
//     });
//
// // GET for logout logout
//     app.get('/logout', function (req, res, next) {
//         if (req.session) {
//             // delete session object
//             req.session.destroy(function (err) {
//                 if (err) {
//                     return next(err);
//                 } else {
//                     return res.redirect('/');
//                 }
//             });
//         }
//     });

    /**** Example ***
    app.post('/api/storeTestData', async (req, res) => {
        try {
            let data = await testing.storeTestData(req.body);
            res.send({status: "OK", data: data});
        } catch (error) {
            res.send(error);
        }
    });

    app.get('/api/service-poc', async (req, res) => {
        try {
            let data = await utils.getPoc(req.query);
            res.send({status: "OK", data: data});
        } catch (error) {
            res.send(error);
        }
    });
     */



};