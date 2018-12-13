const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('project', {
        title: 'Vegistech - Project Materials',
        style: 'projects.css'
    });
});

module.exports = router;