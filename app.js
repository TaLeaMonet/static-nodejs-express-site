//Variables required for express app
const express = require('express');
const app = express();
//Set the view engine to pug
app.set('view engine', 'pug');
//Method to serve static files
app.use(express.static('public'));
















//App is being served on local host 3000
app.listen(3000, () => {
    console.log('Port is running on local host:3000!');
});