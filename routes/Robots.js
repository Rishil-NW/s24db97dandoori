var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Robots_controller = require('../controllers/Robots');
/// API ROUTE ///
// GET resources base.
router.get('/detail', Robots_controller.Robots_view_one_Page);
 
/* GET create ExoticGem page */
router.get('/create', Robots_controller.Robots_create_Page);
 
/* GET create update page */
router.get('/update', Robots_controller.Robots_update_Page);
 
/* GET delete ExoticGem page */
// router.get('/delete', Robots_controller.Robots_delete_Page);
module.exports = router;