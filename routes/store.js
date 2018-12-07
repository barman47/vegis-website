const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.render('store', {
        title:'Our Prodcuts',
        style:'store.css',
        script: 'store.js'
    });
});

router.get('/systemUnits', (req, res) => {
    res.render('system-units', {
        title: 'store - System Units',
        style: 'store.css',
        script: 'store.js'
    });
});

router.get('/tabs', (req, res) => {
    res.render('tabs', {
        title: 'store - Tablet Devices',
        style: 'store.css',
        script: 'store.js'
    });
});

router.get('/screens', (req, res) => {
    res.render('screens', {
        title: 'store - Monitor Screens',
        style: 'store.css',
        script: 'store.js'
    });
});

router.get('/printers', (req, res) => {
    res.render('printers', {
        title: 'store - Printers',
        style: 'store.css',
        script: 'store.js'
    });
});

router.get('/accessories', (req, res) => {
    res.render('accessories', {
        title: 'store - Accessories',
        style: 'store.css',
        script: 'store.js'
    });
});

module.exports = router;