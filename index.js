const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());

app.use(express.static(path.join('ProfileImage')));
app.use(express.static(path.join('ProductImage')));
//mongodb+srv://visheshkumar95647:7906707756@cluster0.bc17r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 
mongoose.connect("mongodb+srv://visheshkumar95647:7906707756@cluster0.bc17r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("Database Connected");
    app.listen(5000, () => {
        console.log("Server is running on PORT 5000");
    });
}).catch(error => {
    console.error("Error connecting to database:", error);
});

app.use(require('./Routes/UserRoutes'));
app.use(require('./Routes/chatRoutes'));
