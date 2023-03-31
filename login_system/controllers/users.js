const mysql = require("mysql")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { promisify } = require("util")

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE
})

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email) {
            return res.status(400).render('index', { msg: 'Please Enter your Email properly!!!', msg_type: "error" })
        }
        if (!password) {
            return res.status(400).render('index', { msg: 'Please Enter your password properly!!!', msg_type: "error" })
        }
        db.query('select * from project_final where Email=?', [email], async (error, result) => {
            console.log(result);
            if (result.length <= 0) {
                return res.status(400).render('index', { msg: 'Access Denied! Incorrect Email or Password', msg_type: "error" })
            }
            else {
                if (!(await bcrypt.compare(password, result[0].Password))) {
                    return res.status(400).render('index', { msg: 'Access Denied! Incorrect Password', msg_type: "error" })
                }
                else {
                    //console.log(result);
                    const id = result[0].id;
                    const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
                        expiresIn: process.env.JWT_EXPIRES_IN
                    });
                    //console.log("The Token is " + token);
                    const cookieOptions = {
                        expiredin: new Date(Date.now() + process.env.JWTCOOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                        httpOnly: true
                    };
                    res.cookie("joes", token, cookieOptions);
                    res.status(200).redirect("/home");
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
};
exports.register = (req, res) => {
    //console.log(req.body);

    /*
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirm_password = req.body.confirm_password;
multi line method to get the elements entred by the user in registration form
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirm_password);
    */
    //res.send("Form Submitted")
    const { name, phone, email, password, confirm_password } = req.body; //single line method to get the values fro m the body of registration page
    //db.query('select Phone_Number from project_final where Phone_Number=?', [phone], async (err, result) => {
    //    if (err) console.log(err)
    //    if (result.length > 0)
    //        return res.render('register', { msg: 'Entered Mobile number is already registered..', msg_type: "error" }); //This msg is important to show an alert to user
    //})
    db.query('select Email from project_final where Email=?', [email], async (error, result) => {
        if (error)
            console.log(error);
        if (result.length > 0) {
            return res.render('register', { msg: 'Email is already in use..', msg_type: "error" }); //This msg is important to show an alert to user
        }
        //else if (result[0].Phone_Number === phone)  This is not working
        //   return res.render('register', { msg: 'Entered Mobile number is already registered..', msg_type: "error" }); //This msg is important to show an alert to user
        else if (password !== confirm_password) {
            return res.render('register', { msg: 'Password Does not match..', msg_type: "error" }); //This msg is important to show an alert to user
        }
        let hashedPassword = await bcrypt.hash(password, 8);
        //console.log(hashedPassword);
        db.query('insert into project_final set ?', { Name: name, Phone_Number: phone, Email: email, Password: hashedPassword }, (err, result) => {
            if (err)
                console.log(err);
            else {
                //console.log(result)
                return res.render("register", { msg: "User Registration Successful...", msg_type: "good" })
            }
        })
    })
};

exports.isLoggedIn = async (req, res, next) => {
    //req.name = "Check Login.....";
    //console.log(req.cookies);

    if (req.cookies.joes) {
        try {
            const decode = await promisify(jwt.verify)(
                req.cookies.joes,
                process.env.JWT_SECRET,
            );
            //console.log(decode);
            db.query("SELECT * FROM project_final WHERE id=?", [decode.id], (err, result) => {
                if (!result) {
                    return next();
                }
                req.user = result[0];
                return next();
            });
        }
        catch (error) {
            console.log(error);
            return next();
        }
    }
    else
        next();
}

exports.logout = async (req, res) => {
    res.cookie("joes", "logout", {
        expiredin: new Date(Date.now() + 2 * 1000),
        httpOnly: true,
    });
    console.warn("Logout Successfully...")
    res.status(200).redirect("/")
}