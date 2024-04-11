var express = require('express');
const Robots_controllers= require('../controllers/food');
var router = express.Router();
/* GET food */

router.get('/', Robots_controllers.food_view_all_Page);

router.put('/', function(req, res) {
    if(req.body.checkboxsale)toUpdate.sale = true;
    else toUpdate.same = false;
    })
router.get('/', Robots_controllers.food_delete );
/* GET detail food page */
router.get('/detail', Robots_controllers.food_view_one_Page);
/* GET create food page */
router.get('/create', Robots_controllers.food_create_Page);
/* GET create update page */
router.get('/update', Robots_controllers.food_update_Page);
/* GET delete food page */
router.get('/delete', Robots_controllers.food_delete_Page);


module.exports = router;