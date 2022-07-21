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
    const projects = data.projects[req.params.id]
    if (projects) {
    res.render('project', {
        projects: projects, 
    });
    } else {
    const err = new Error('Not Found');
    err.status = 404;
    err.message = "This page doesn't exist!";
    res.render('page-not-found', { err: err })
    }           
});

module.exports = router; 