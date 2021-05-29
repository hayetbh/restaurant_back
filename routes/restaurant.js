const express = require('express');
const router = express.Router()
const res_controler = require('../controllers/restaurant')

//router.get("/customers/:customerId", customers.findOne);
router.post('/getres', res_controler.getres)
router.post('/addres', res_controler.addres)
router.post('/getbyid/:req', res_controler.getbyid)
//router.post('/deleteres', res_controler.deleteres)
module.exports = router
