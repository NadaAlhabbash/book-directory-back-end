const express = require('express');
const controllers = require('./controllers');

const web = express.Router();
web.use(express.json());

//get all books
web.get('/books', (req, res) => {
   controllers.allBookscb(req, res);
});

web.get('/books/:id', (req, res) => {
   controllers.oneBookcb(req, res);
});

web.post('/books', (req, res) => {
   controllers.postBookcb(req, res);
});

web.put('/books/:id', (req, res) => {
   controllers.updateBookcb(req, res);
});

web.delete('/books/:id', (req, res) => {
   controllers.deletBookcb(req, res);
});

module.exports = web;