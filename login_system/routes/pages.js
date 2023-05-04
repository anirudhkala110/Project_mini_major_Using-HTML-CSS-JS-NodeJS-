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


/*Circulars Routing*/
router.get("/CircularHomeinterface", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('CircularHomeinterface', { user: req.user })
    else res.redirect("/index")
})
/*Circulars Routing for Addition*/
router.get("/Addexternalcircular", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Addexternalcircular', { user: req.user })
    else res.redirect("/index")
})
router.get("/Addinternalcircular", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Addinternalcircular', { user: req.user })
    else res.redirect("/index")
})
/*Circulars Routing Deletion*/
router.get("/Deleteinternalcirculars", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Deleteinternalcirculars', { user: req.user })
    else res.redirect("/index")
})
router.get("/Deleteexternalcircular", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Deleteexternalcircular', { user: req.user })
    else res.redirect("/index")
})
/*Circulars Routing Edit*/
router.get("/Editinternalcircular", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Editinternalcircular', { user: req.user })
    else res.redirect("/index")
})
router.get("/Editexternalcircular", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Editexternalcircular', { user: req.user })
    else res.redirect("/index")
})
/*Circulars Routing Updation*/
router.get("/Uploadupdatedinternalcircular", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Uploadupdatedinternalcircular', { user: req.user })
    else res.redirect("/index")
})
router.get("/Uploadupdatedexternalcircular", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Uploadupdatedexternalcircular', { user: req.user })
    else res.redirect("/index")
})


/*Notices Routing */
router.get("/Notice", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Notice', { user: req.user })
    else res.redirect("/index")
})

/*Notices Routing Addtion of Notices*/
router.get("/Addnotices", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Addnotices', { user: req.user })
    else res.redirect("/index")
})

router.get("/AddPlacementrelatednotices", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('AddPlacementrelatednotices', { user: req.user })
    else res.redirect("/index")
})
router.get("/AddresultsofPlacementnotices", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('AddresultsofPlacementnotices', { user: req.user })
    else res.redirect("/index")
})

/*Notices Routing Edit of Notices*/
router.get("/Editnotices", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Editnotices', { user: req.user })
    else res.redirect("/index")
})
router.get("/Editplacementnotices", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Editplacementnotices', { user: req.user })
    else res.redirect("/index")
})

router.get("/Editresultsofplacementnotices", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Editresultsofplacementnotices', { user: req.user })
    else res.redirect("/index")
})

/*Notices Routing Updation of Notices*/
router.get("/Uploadupdatednotices", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Uploadupdatednotices', { user: req.user })
    else res.redirect("/index")
})
router.get("/Uploadupdatedplacementnotices", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Uploadupdatedplacementnotices', { user: req.user })
    else res.redirect("/index")
})

router.get("/Uploadupdatedresultsofplacementnotices", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Uploadupdatedresultsofplacementnotices', { user: req.user })
    else res.redirect("/index")
})

/*Notices Routing deletion of Notices*/
router.get("/Deletenotices", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Deletenotices', { user: req.user })
    else res.redirect("/index")
})

router.get("/Deleteplacementnotices", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Deleteplacementnotices', { user: req.user })
    else res.redirect("/index")
})
router.get("/Deleteresultsofplacementnotices", userController.isLoggedIn, (req, res) => {
    if (req.user)
        res.render('Deleteresultsofplacementnotices', { user: req.user })
    else res.redirect("/index")
})



/*Time Table Routings*/
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



/*This is the direct entering part of the Website Viewing as Student*/

router.get("/StudentHomepage", (req, res) => {
    res.render("StudentHomepage");
})

/*Notice View port of Student */
router.get("/StudentNoticeHomepage", (req, res) => {
    res.render("StudentNoticeHomepage");
})
router.get("/StudentNotices", (req, res) => {
    res.render("StudentNotices");
})
router.get("/StudentPlacementNotices", (req, res) => {
    res.render("StudentPlacementNotices");
})
router.get("/StudentPlacementResultNotices", (req, res) => {
    res.render("StudentPlacementResultNotices");
})

/*Cousre Allotement*/

router.get("/StudentCourseallotmentMain", (req, res) => {
    res.render("StudentCourseallotmentMain");
})
router.get("/StudentCourseallotment2yr", (req, res) => {
    res.render("StudentCourseallotment2yr");
})
router.get("/StudentCourseallotment3yr", (req, res) => {
    res.render("StudentCourseallotment3yr");
})
router.get("/StudentCourseallotment4yr", (req, res) => {
    res.render("StudentCourseallotment4yr");
})


/*Time Table*/
router.get("/StudentTImeTableMain", (req, res) => {
    res.render("StudentTImeTableMain");
})
router.get("/StudentTimeTable2yr", (req, res) => {
    res.render("StudentTimeTable2yr");
})
router.get("/StudentTimeTable3yr", (req, res) => {
    res.render("StudentTimeTable3yr");
})
router.get("/StudentTimeTable4yr", (req, res) => {
    res.render("StudentTimeTable4yr");
})


/*Circular Details*/
router.get("/StudentCircularHomeinterface", (req, res) => {
    res.render("StudentCircularHomeinterface");
})
router.get("/StudentInternalCirculardetails", (req, res) => {
    res.render("StudentInternalCirculardetails");
})
router.get("/StudentExternalCirculardetails", (req, res) => {
    res.render("StudentExternalCirculardetails");

})
/*End of Direct access of Display*/
module.exports = router;
