# Quote API

## Description

This project is a simple Express.js API that provides endpoints for retrieving random quotes and searching for quotes by a specific person. It also allows adding new quotes via a POST request.

- This project Is part of the **Codecademy Back-End Engineer Career Path** the front end part was provided by the patflorm, the rest i s made by me as part of the project.

## Features

- **Random Quote**: Retrieve a random quote from a collection of quotes.
- **Search by Person**: Get quotes by a specific person by providing a query parameter.
- **Add New Quote**: Add a new quote to the collection via a POST request.
- **Error Handling**: Proper handling of errors and invalid requests.

## Installation

1. Clone the repository:

```bash
git clone 
```

2. Naviaget to the project directory:

```bash
cd quote-api
```

3. Install dependencies:

```bash
npm install
```

4. Start the server

```bash
npm start
```

# Usage

> The requests can be either made by the front-end part of the project or directly with Postman.

## Random Quote

> Make a GET request to **'/api/quotes/random'** to retrieve a random quote.

## Search by Person
> Make a GET request to **'/api/quotes?person=<person-name>'** to get quotes by a specific person.

## Add New Quote
> Make a POST request to **'/api/quotes'** with query parameters quote and person to add a new quote.

```bash
curl -X POST 'http://localhost:4001/api/quotes?quote=Your%20quote%20here&person=John%20Doe'
```
## Dependencies
>>> Express.js: Web framework for Node.js
>>> nodemon: Utility to automatically restart the server during development
