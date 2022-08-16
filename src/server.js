const joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
res.send('Book Directory');
});

//to get all the books
app.get('/books', (req, res) => {
    res.send(books);
});

app.get('/books/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));
    if(!book) res.status(404).send('This book id is not found');
    res.send(book);
});

app.post('/books', (req, res) => {

    const {error} = validateBook(req.body);
        if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
     const book = {
        id: books.length + 1,
        name: req.body.name
    }; 
    books.push(book);
    res.send(book);
})

app.put('/books/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));
    if(!book) res.status(404).send('This book id is not found');

    const {error} = validateBook(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    book.name = req.body.name;
    res.send(book);
})

app.delete('/books/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));
    if(!book) res.status(404).send('This book id is not found');

    const index = books.indexOf(book); 
    books.splice(index, 1); 

    res.send(book);

})

function validateBook(book){
    const schema = {
        name: joi.string().min(3).required()
    };

    return joi.validate(book, schema);
}


const port = process.env.port || 3000;
app.listen(port, () => {console.log(`listening on port ${port}`)});