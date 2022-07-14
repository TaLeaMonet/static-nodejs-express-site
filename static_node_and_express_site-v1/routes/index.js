const express = require('express');
const router = express.Router();
const data = require('../data/projects.json');

//Create routes
router.get('/', (req, res) => {
// Not sure if I the locals set to data.projects properly
    res.locals.projects = data.projects;
    console.log(res.locals.projects)
    res.render('index');
});
router.get('/about', (req, res) => {
    res.render('about');
});
router.get('/project', (req, res) => {
    res.render('project');
});

module.exports = router; 