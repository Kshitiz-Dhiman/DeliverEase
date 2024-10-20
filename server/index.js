const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('./models/user-model');
const saltRounds = 10;
const cookieParser = require('cookie-parser');
const cors = require("cors");
const requestModel = require('./models/request-model');

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/register", async (req, res) => {
    try {
        const { name, email, password, type } = req.body;

        let user = await userModel.findOne({ email: email });
        if (user) return res.status(500).send("User already exists");

        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) {
                console.error("Error generating salt:", err);
                return res.status(500).send("Error generating salt");
            }
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) {
                    console.error("Error hashing password:", err);
                    return res.status(500).send("Error hashing password");
                }
                try {
                    const user = await userModel.create({
                        name,
                        email,
                        password: hash,
                        type
                    });
                    const token = jwt.sign({ email: email, userId: user._id }, "verysecretkey");
                    res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
                    res.send({ status: "ok" });
                } catch (err) {
                    console.error("Error creating user:", err);
                    res.status(500).send("Error creating user");
                }
            });
        });
    } catch (err) {
        console.error("Error in registration:", err);
        res.status(500).send("Error in registration");
    }
});
app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await userModel.findOne({ email: email });
        if (!user) return res.status(500).send("User not found");

        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                console.error("Error comparing passwords:", err);
                return res.status(500).send("Error comparing passwords");
            }
            if (result) {
                const token = jwt.sign({ email: user.email, userId: user._id }, "verysecretkey");
                res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
                console.log("Token created:", token);
                res.json({ status: "success", user: token });
            } else {
                res.status(401).send("Invalid password");
            }
        });
    } catch (err) {
        console.error("Error in login:", err);
        res.status(500).send("Error in login");
    }
});
app.get("/api/logout", (req, res) => {
    res.clearCookie("token");
    res.send("Logged out");
});
app.get("/api/user", isloggedin, async (req, res) => {
    try {
        const user = await userModel.
            findById(req.user.userId)
            .populate("requests");
        if (!user) return res.status(404).send("User not found");
        res.json({
            name: user.name,
            email: user.email,
            type: user.type
        });
    } catch (error) {
        console.error(error);
    }
})
app.get("/api/requests", isloggedin, async (req, res) => {
    let user = await userModel.findById(req.user.userId);
    let requests = await requestModel.find({ user: user._id });
    res.json(requests);
})
app.post("/api/requests", isloggedin, async (req, res) => {
    let user = await userModel.findById(req.user.userId);
    let { title, description, price } = req.body;

    let request = await requestModel.create({
        user: user._id,
        title,
        description,
        price
    })
    user.requests.push(request._id);
    await user.save();
    res.send("Request created successfully");
})
app.get("/api/userexist", isloggedin, async (req, res) => {
    if (req.user.userId) {
        res.send({ status: "ok" });
    } else {
        res.send({ status: "error" });
    }
})
app.get("/api/allrequests", isloggedin, async (req, res) => {
    try {
        let requests = await requestModel.find().populate('user');
        res.json(requests);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
function isloggedin(req, res, next) {
    if (req.cookies.token === "") {
        res.redirect("/login");
    } else {
        let data = jwt.verify(req.cookies.token, "verysecretkey");
        req.user = data;
    }
    next();
}
app.listen(3000);
