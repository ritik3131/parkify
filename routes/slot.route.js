const express = require('express');
const Router = express.Router();
const slotController = require('../controllers/slot.controller');
const IsLoggedInMiddleware=require('../middleware/login.middleware');
const sanitizerMiddleware=require('../middleware/sanitizer.middleware');

Router.route('/add/:id')
    .get(slotController.renderAddSlot)
    .post(slotController.addSlot)

Router.route('/:id')
    .get(slotController.renderSlot)
    .delete(slotController.deleteSlot)

Router.route('/garage/:id')
    .get(slotController.renderSlots);

Router.route('/apibooking/:id')
    .get(slotController.apiBooking);
    
module.exports=Router;