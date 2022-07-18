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

router.get('/project/:id', (req, res) => {
    res.render('project', {
        projects: data.projects[req.params.id], 
    });
         
});

module.exports = router; 