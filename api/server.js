const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mern-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    // Print out a message when we successfully connect to the DB, otherwise log the error in console
    .then(() => console.log("Connected to DB"))
    .catch(console.error);

app.listen(3001, () => console.log("Server started on port 3001"));