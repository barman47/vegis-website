const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.render('products', {
        title:'Our Prodcuts',
        style:'products.css',
        script: 'products.js'
    });
});

router.get('/systemUnits', (req, res) => {
    res.render('system-units', {
        title: 'Products - System Units',
        style: 'products.css',
        script: 'products.js'
    });
});

router.get('/tabs', (req, res) => {
    res.render('tabs', {
        title: 'Products - Tablet Devices',
        style: 'products.css',
        script: 'products.js'
    });
});

router.get('/screens', (req, res) => {
    res.render('screens', {
        title: 'Products - Monitor Screens',
        style: 'products.css',
        script: 'products.js'
    });
});

router.get('/printers', (req, res) => {
    res.render('printers', {
        title: 'Products - Printers',
        style: 'products.css',
        script: 'products.js'
    });
});

router.get('/accessories', (req, res) => {
    res.render('accessories', {
        title: 'Products - Accessories',
        style: 'products.css',
        script: 'products.js'
    });
});

module.exports = router;