var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Robots_controller = require('../controllers/Robots');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// food ROUTES ///
// POST request for creating a food. 
router.post('/Robots', Robots_controller.Robots_create_post);
// DELETE request to delete food.
router.delete('/Robots/:id', Robots_controller.Robots_delete);
// PUT request to update food.
router.put('/Robots/:id', Robots_controller.Robots_update_put);
// GET request for one food.
router.get('/Robots/:id', Robots_controller.Robots_detail);
// GET request for list of all food items.
router.get('/Robots', Robots_controller.Robots_list);
module.exports = router;