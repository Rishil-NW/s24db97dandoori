var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Robots_controller = require('../controllers/Robots');

/// API ROUTE ///
// GET resource detail.
router.get('/detail/:id', Robots_controller.Robots_view_one_Page);
 
// GET create Robots page
router.get('/create', Robots_controller.Robots_create_Page);
 
// GET update Robots page
router.get('/update/:id', Robots_controller.Robots_update_Page);
 
// GET delete Robots page
router.get('/delete/:id', Robots_controller.Robots_delete_Page);

module.exports = router;
