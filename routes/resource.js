var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Robots_controller = require('../controllers/Robots');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Robots ROUTES ///
// POST request for creating a Robots. 
router.post('/Robots', Robots_controller.Robots_create_post);
// PUT request to update Robots.
router.put('/Robots/:id', Robots_controller.Robots_update_put);
// GET request for one Robots.
router.get('/Robots/:id', Robots_controller.Robots_detail);
// GET request for list of all Robots items.
router.get('/Robots', Robots_controller.Robots_list);
module.exports = router;