const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');// takes an array and returns a random element from that array

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

// GET request that send back a random quote
// as object
app.get('/api/quotes/random', (req, res, next) => {

    // getting a random quote calling getRandomElement
    // assigning to a randomQuote
    const randomQuote = getRandomElement(quotes);

    // format the object as expected
    const formatedQuote = {quote: randomQuote};

    // response with randomQuote
    res.send(formatedQuote);
})

// GET request for send back a quote based on specific params
// and if there's no params should return all the quotes
// when a person is required an array with the quotes from that person
// should be returned
// if no quotes from that person are in the data return empty array
app.get('/api/quotes', (req, res, next) => {


    const person = req.query.person;

    // check if the req has no queries
    if(!person) {

        // formatted quotes
        const allTheData = {quotes: quotes};

        res.send(allTheData);
    }


    // when there's person query

    // declare a new empty array that
    // will contain the quotes from the author
    const arrayWithQuotes = [];

    for(let obj of quotes) {

        // check if the person in the query match with the asked
        if(obj.person === person) arrayWithQuotes.push(obj);
        console.log(obj);

    }

    // response with the array quotes
    res.send({quotes: arrayWithQuotes});
})

// POST request to create a new quote into the quotes array
// The information is sent through a query
// When the query does not contain any of the two parameters
// response with 404
app.post('/api/quotes', (req, res, next) => {

    // get the keys from the req query
    const query = req.query;

    console.log(req.query);

    // verify that quote and person exists in the queryKeys
    if(query.quote && query.person) {

        // add the object to the array quotes
        quotes.push(query);

        // get the last object in the quotes array
        const newQuote = quotes[quotes.length - 1];

        // send the response with the new object
        // formatted in the expected way
        res.send({quote: newQuote});
    } else {

        res.status(400).send();
    }

})


app.listen(PORT, () => {
    console.log(`Port is listening on port: ${PORT}`);
})