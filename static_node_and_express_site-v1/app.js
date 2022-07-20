//Variables required for express app
const express = require('express');
const app = express();
const data = require('./data/projects.json');
const routes = require('./routes');

//Set the view engine to pug
app.set('view engine', 'pug');

//Method to serve static files
app.use('/static', express.static('public'));
app.use(routes);


//Error handling
//404 error handling 
app.use((req, res, next) => {
const err = new Error('Not found');
err.status = 404;
err.message = 'Page Not Found'
console.log('Looks like this page does not exist', err);
    next(err);
    });
//Global error handling
app.use((err, req, res, next) => {
    if(err) {
        if(err.status === 404) {
            res.status(404).render('page-not-found', {err}); 
         } else {
              err.status = 500;
              console.log('Uh oh, looks like there was a problem', err) 
              res.status(err.status || 500).render('error', {err}) 
            }
        }
    });


//App is being served on local host 3000
app.listen(3000, () => {
    console.log('Port is running on local host:3000');
});