const express = require("express");
const connectDB = require("./db");
const cookieParser = require("cookie-parser");

const { adminAuth, userAuth } = require("./middleware/auth.js");

const PORT = 5000;

const app = express();



//Connecting the Database
connectDB();

app.set("view engine", "ejs");

app.get("/admin", adminAuth, (req,res) => res.send("Admin Route"));
app.get("/basic", userAuth, (req,res) => res.send("User Route"));

app.get("/", (req, res) => res.render("home"));
app.get("/register", (req, res) => res.render("register"));
app.get("/login", (req, res) => res.render("login"));
app.get("/admin", adminAuth, (req, res) => res.render("admin"));
app.get("/basic", userAuth, (req, res) => res.render("user"));

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", require("./Auth/Route"));



app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

//Error handling of unhandledRejection

process.on("unhandledRejection", err => {
    console.log(`an error occured: ${err.message}`)
    server.close(() => process.exit(1))
})