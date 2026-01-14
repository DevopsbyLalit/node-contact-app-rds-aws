const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');

    db.query("CREATE DATABASE IF NOT EXISTS my_app_db", () => {
        db.query("USE my_app_db", () => {
            db.query(`CREATE TABLE IF NOT EXISTS contacts (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255)
            )`);
            console.log("Database and table ready");
        });
    });
});


app.post('/add', (req, res) => {
    const username = req.body.username;
    db.query("INSERT INTO contacts(username) VALUES (?)", [username]);
    res.json({ message: "Contact added" });
});


app.get('/contacts', (req, res) => {
    db.query("SELECT * FROM contacts", (err, rows) => {
        res.json(rows);
    });
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
