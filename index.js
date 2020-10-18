const express = require('express');
const { readFile } = require('fs').promises;

const app = express()

app.use(express.static("public"))

app.get('/', async (request, response) => {

    response.send( await readFile( './public/index.html', 'utf8') );

});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))