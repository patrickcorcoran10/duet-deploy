const express = require('express')
const router = express.Router();
// const passport = require('passport');
// const flash = require('connect-flash');
// const session = require('express-session');

// const app = express();
// app.use(passport.initialize());
// app.use(flash());
// app.use(session({ secret: 'nw bootcamp', resave: true, saveUninitialized: true }));
// app.use(passport.session());


router.get("/register", (req, res) => res.send('register'))

router.get("/loginuser", (req, res) => res.send('login'))

// app.post('/api/register', function (req, res) {
//     const UserName = req.body.UserName
//     const Email= req.body.Email
//     const Password= req.body.Password

//     // const role = req.body.band;
//     db.User.create({
//         UserName: UserName,
//         Email: Email,
//         Password: Password,


//         // role: role
//     })
//         .then(dbUser => {
//             res.json(dbUser);
//             console.log("hello")
//         })
// });



module.exports = router;