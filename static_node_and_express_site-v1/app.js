//Variables required for express app
const express = require('express');
const app = express();
//Set the view engine to pug
app.set('view engine', 'pug');

//Method to serve static files
app.use('/static', express.static('public'));

//Create routes
app.get('/', (req, res) => {
    //app.locals.projects = data.projects;
    //console.log(app.locals.projects);
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});











//App is being served on local host 3000
app.listen(3000, () => {
    console.log('Port is running on local host:3000');
});