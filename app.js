const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');
const app = express(); 


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
 
app.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM Employee');
  res.render('index', { employees: rows,  title: 'Employee List' });
             
              

});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});