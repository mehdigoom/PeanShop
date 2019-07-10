const http = require('http');
const database = require("./database");
const hostname = '127.0.0.1';
const port = 5000;

http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end();
});

var express = require('express');
var app = express();
var bodyParser = require("body-parser"); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('root at at api')
});

app.get('/users', (req, res) => {
  database.getUsers( (err, users) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(users);
  }, null);
});

app.get('/products', (req, res) => {
  database.getProducts( (err, products) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(products);
  }, null);
});

app.get('/basket/:id', (req, res) => {
  database.getBasket( (err, basket) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(basket);
  }, req.params.id);
});

app.post('/addbasket', (req, res) => {
 
  database.addBasket( (err, basket) => {

    if (err) return res.status(500).send(err);
    return res.status(200).send(basket);
  }, req.body.id,req.body.quantity, req.body.products_id,req.body.users_id);
});

app.delete('/delbasket/:id', (req, res) => {
  database.delBasket( (err, basket) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(basket);
  }, req.params.id);
});

app.patch('/users', (req, res) => {
  database.updateUser((err, user) => {
    console.log(`User -${req.body.firstname}- updated.`);
    if (err) return res.status(500).send(err);
    else return res.status(200).send(user);
  }, req.body) 
})

app.post('/user/login', (req, res) => {
  database.loginUser( (err, user) => {
    if (err) return res.status(500).send(err);
    else if (!user) return res.send("Bad informations ...");
    console.log('User', user)
    res.status(200).send(user)
  }, req.body);
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});