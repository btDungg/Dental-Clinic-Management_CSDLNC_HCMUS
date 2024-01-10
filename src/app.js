const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 3000;
const hbs = require("express-handlebars");

app.engine(
    ".hbs",
    hbs.engine({
        extname: ".hbs",
    })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

// set static files
app.use(express.static("public"));

app.get("/admin/home", (req, res) => {
    res.render("home", {
        isAdmin:true,
        title: "Home Page",
    });
});

app.get("/staff/home", (req, res) => {
    res.render("home", {
        isStaff:true,
        title: "Home Page",
    });
});

app.get("/staff/shedule", (req, res) => {
    res.render("shedule", {
        isStaff:true,
        title: "Shedule Page",
    });
});
app.get("/add_shedule", (req, res) => {
    res.render("add_shedule", {
        title: "Add Shedule Page",
    });
});

app.get("/admin/shedule", (req, res) => {
    res.render("shedule", {
        isAdmin:true,
        title: "Shedule Page",
    });
});

    app.get("/login", (req, res) => {
        res.render("login", {
            title: "Login page",
        });
    });
app.get("/signup", (req, res) => {
    res.render("signup", {
        title: "Signup page",
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});