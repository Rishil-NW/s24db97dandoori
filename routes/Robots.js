var express = require('express');
const Robots_controllers= require('../controllers/Robots');
var router = express.Router();
/* GET Robots */
 
router.get('/', Robots_controllers.Robots_view_all_Page);
 
router.put('/', function(req, res) {
    if(req.body.checkboxsale)toUpdate.sale = true;
    else toUpdate.same = false;
    })
router.get('/', Robots_controllers.Robots_delete );
/* GET detail Robots page */
router.get('/detail', Robots_controllers.Robots_view_one_Page);
/* GET create costume page */
router.get('/create', Robots_controllers.Robots_create_Page);
/* GET create update page */
router.get('/update', Robots_controllers.Robots_update_Page);

module.exports = router;