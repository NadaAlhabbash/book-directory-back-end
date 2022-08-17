const express = require('express');
const app = express();
const web = require('./routes')

app.use(express.json());
app.use(require('./routes'));

app.use(web);

app.get('/', (req, res) => {
    res.send('Book Directory');
    });
    
const port = process.env.port || 3000;
app.listen(port, () => {console.log(`listening on port ${port}`)});

// app.delete('/books/:id', (req, res) => {
    // const book = books.find(c => c.id === parseInt(req.params.id));
    // if(!book) res.status(404).send('This book id is not found');

    // const index = books.indexOf(book); 
    // books.splice(index, 1); 

    // res.send(book);

// })

