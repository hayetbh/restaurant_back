const express = require('express');
const router = express.Router()
const cat_controler = require('../controllers/category')


router.post('/getcat', cat_controler.getcat)
router.post('/addcat', cat_controler.addcat)
router.post('/deletecat', cat_controler.deletecat)
module.exports = router
