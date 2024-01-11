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
        isAdmin: true,
        title: "Home Page",
    });
});

app.get("/staff/home", (req, res) => {
    res.render("home", {
        isStaff: true,
        title: "Home Page",
    });
});

app.get("/dentist/home", (req, res) => {
    res.render("home", {
        isDentist: true,
        title: "Home Page",
    });
});



app.get("/dentist/list_dentist", (req, res) => {
    res.render("manage_dentist", {
        isDentist: true,
        title: "Dentist Page",
    });
});

app.get("/staff/list_dentist", (req, res) => {
    res.render("manage_dentist", {
        isStaff: true,
        title: "Dentist Page",
    });
});
app.get("/admin/list_dentist", (req, res) => {
    res.render("manage_dentist", {
        isAdmin: true,
        title: "Dentist Page",
    });
});
app.get("/admin/list_staff", (req, res) => {
    res.render("manage_staff", {
        isAdmin: true,
        title: "Staff Page",
    });
});
app.get("/dentist/list_staff", (req, res) => {
    res.render("manage_staff", {
        isDentist: true,
        title: "Staff Page",
    });
}); app.get("/staff/list_staff", (req, res) => {
    res.render("manage_staff", {
        isStaff: true,
        title: "Staff Page",
    });
});


app.get("/staff/schedule", (req, res) => {
    res.render("schedule", {
        isStaff: true,
        title: "schedule Page",
    });
});
app.get("/staff/add_schedule", (req, res) => {
    res.render("add_schedule", {
        isStaff: true,
        title: "Add schedule Page",
    });
});
app.get("/dentist/add_schedule", (req, res) => {
    res.render("add_schedule", {
        isDentist: true,
        title: "Add schedule Page",
    });
});
app.get("/admin/add_schedule", (req, res) => {
    res.render("add_schedule", {
        isAdmin: true,
        title: "Add schedule Page",
    });
});

app.get("/admin/schedule", (req, res) => {
    res.render("schedule", {
        isAdmin: true,
        title: "schedule Page",
    });
});

app.get("/admin/customer", (req, res) => {
    res.render("customer", {
        isAdmin: true,
        title: "Customer Page",
    });
});
app.get("/dentist/customer", (req, res) => {
    res.render("customer", {
        isDentist: true,
        title: "Customer Page",
    });
});
app.get("/staff/customer", (req, res) => {
    res.render("customer", {
        isStaff: true,
        title: "Customer Page",
    });
});

app.get("/admin/customer/detail", (req, res) => {
    res.render("detailcustomer", {
        isAdmin: true,
        title: "Detail Customer Page",
    });
});
app.get("/dentist/customer/detail", (req, res) => {
    res.render("detailcustomer", {
        isDentist: true,
        title: "Detail Customer Page",
    });
});
app.get("/staff/customer/detail", (req, res) => {
    res.render("detailcustomer", {
        isStaff: true,
        title: "Detail Customer Page",
    });
});

app.get("/staff/profile", (req, res) => {
    res.render("profile", {
        isStaff: true,
        title: "Profile Page",
    });
});

app.get("/admin/profile", (req, res) => {
    res.render("profile", {
        isAdmin: true,
        title: "Profile Page",
    });
});
app.get("/dentist/profile", (req, res) => {
    res.render("profile", {
        isDentist: true,
        title: "Profile Page",
    });
});



app.get("/admin/medecion", (req, res) => {
    res.render("medecion", {
        isAdmin: true,
        title: "Medecion Page",
    });
});

app.get("/admin/clinic", (req, res) => {
    res.render("clinic", {
        isAdmin: true,
        title: "Clinic Page",
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