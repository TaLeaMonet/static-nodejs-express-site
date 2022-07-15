const express = require('express');
const router = express.Router();
const data = require('../data/projects.json');

//Create routes
router.get('/', (req, res) => {
    res.locals.projects = data.projects;
    res.render('index');
});
router.get('/about', (req, res) => {
    res.render('about');
});

/** 
 * Continue working on dynamic routes based on each project id 
 */

router.get('/project', (req, res) => {
    res.locals.projects = data.projects;
    console.log(res.locals.projects);
    res.render('project', {
        projects: data[req.params.id]
    });
    

});

module.exports = router; 