const express = require('express');
const mysql = require('mysql');
const doenv = require('dotenv')
const path = require('path')
const app = express();
const hbs = require("hbs");
const cookieParser = require("cookie-parser")

doenv.config({
    path: './.env'
})

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE
})

db.connect((err) => {
    if (err) throw err
    else {
        console.log("MySQL Connection successful..")
        var sqllogin = "CREATE TABLE project_final(id INT(5),Name VARCHAR(255),Phone_Number INT(11),Email VARCHAR(100),Password VARCHAR(100))"
        db.query(sqllogin, function (err, result) {
            if (err) {
                console.log("Table Login Already Exists...");
            }
            else {
                console.log("Table project_final Created :)");
                //var againsql = "INSERT INTO project_final(id,Name,Phone_Number,Email,Password) VALUES ('1','Anirudh Kala','123456789','anirudhkala@gmail.com','Akala@12345')"
                //db.query(againsql, function (err, result) {
                //    if (err)
                //        throw err
                //    else
                //        console.log("Data inserted : ", result);
                //})
            }
        })
        var sqldepartmentnotices = "CREATE TABLE department_notice(id INT(5),Name VARCHAR(255),Phone_Number INT(11),Email VARCHAR(100),Password VARCHAR(100))"
        db.query(sqldepartmentnotices, function (err, result) {
            if (err) {
                console.log("Table department_notice Already Exists...");
            }
            else {
                console.log("Table department_notice Created:)");
            }
        })
        var sqlplacementnotices = "CREATE TABLE placement_notice(id INT(5),topic VARCHAR(255),detail LONGTEXT,image BLOB,date DATE)"
        db.query(sqlplacementnotices, function (err, result) {
            if (err) {
                console.log("Table placement_notice Already Exists...");
            }
            else {
                console.log("Table placement_notice Created:)");
            }
        })
        var sqlplacementresultnotice = "CREATE TABLE placement_result_notice(id INT(5),topic VARCHAR(255),detail LONGTEXT,image BLOB,date DATE)"
        db.query(sqlplacementresultnotice, function (err, result) {
            if (err) {
                console.log("Table placement_result_notice Already Exists...");
            }
            else {
                console.log("Table placement_result_notice Created:)");
            }
        })
    }
})

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

//console.log(__dirname); ->to chk corrent directory

const location = path.join(__dirname, "./public");
app.use(express.static(location))
app.set('view engine', "hbs")


const partialPath = path.join(__dirname, "./views/partials")
hbs.registerPartials(partialPath);

app.use('/', require('./routes/pages'))
app.use('/auth', require('./routes/auth'))

app.listen(5000, () => {
    console.log("Server Started @port 5000")
});
