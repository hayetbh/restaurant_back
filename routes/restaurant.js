const express = require('express');
const router = express.Router()
const res_controler = require('../controllers/restaurant')


router.post('/getbycat', res_controler.getresbycat)
router.post('/addres', res_controler.addres)
router.post('/getbyid', res_controler.getbyid)
router.post('/deleteres', res_controler.deleteres)
module.exports = router
