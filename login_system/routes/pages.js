const express = require("express")
const router = express.Router();
const userController = require('../controllers/users')

//Login Page in default
router.get(["/", "/login", "/index"], (req, res) => { //array method to call a page with different names
    //res.send("<h1>Inside router.js</h1>")
    res.render('index');
})
// Register page
router.get("/register", (req, res) => {
    //res.send("<h1>Inside router.js</h1>")
    res.render('register');
})
//Profile path routing
router.get("/profile", userController.isLoggedIn, (req, res) => {
    //res.send("<h1>Inside router.js</h1>")

    if (req.user) {
        res.render("profile", { user: req.user });
    }
    else {
        res.redirect("/index")
    }

    //res.render('profile');
})
//Home page 
router.get("/home", userController.isLoggedIn, (req, res) => {

    //res.send("<h1>Inside app.js</h1>")
    //console.log(req.name);

    if (req.user) {
        res.render("home", { user: req.user });
    }
    else {
        res.redirect("/index")
    }

    //res.render('home');
})

router.get("/CircularHomeinterface", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('CircularHomeinterface', { user: req.user })
    else res.redirect("/index")
})
router.get("/Courseallotment2yr", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Courseallotment2yr', { user: req.user })
    else res.redirect("/index")
})
router.get("/Courseallotment3yr", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Courseallotment3yr', { user: req.user })
    else res.redirect("/index")
})
router.get("/Courseallotment4yr", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Courseallotment4yr', { user: req.user })
    else res.redirect("/index")
})
router.get("/CourseallotmentMain", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('CourseallotmentMain', { user: req.user })
    else res.redirect("/index")
})
router.get("/Departmentrelatednotices", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Departmentrelatednotices', { user: req.user })
    else res.redirect("/index")
})
router.get("/Externalcirculars", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Externalcirculars', { user: req.user })
    else res.redirect("/index")
})
router.get("/Internalcirculars", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Internalcirculars', { user: req.user })
    else res.redirect("/index")
})
router.get("/Notice", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Notice', { user: req.user })
    else res.redirect("/index")
})
router.get("/Placementrelatednotices", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Placementrelatednotices', { user: req.user })
    else res.redirect("/index")
})
router.get("/TimeTable3yr", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('TimeTable3yr', { user: req.user })
    else res.redirect("/index")
})
router.get("/TimeTable2yr", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('TimeTable2yr', { user: req.user })
    else res.redirect("/index")
})
router.get("/TimeTable4yr", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('TimeTable4yr', { user: req.user })
    else res.redirect("/index")
})
router.get("/TImeTableMain", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('TImeTableMain', { user: req.user })
    else res.redirect("/index")
})

module.exports = router;
