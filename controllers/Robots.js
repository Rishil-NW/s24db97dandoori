var Robots= require('../models/Robots');
// List of all food
exports.Robots_list = function(req, res) {
res.send('NOT IMPLEMENTED: Robots list');
};
// for a specific Dog.
exports.Robots_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Robots detail: ' + req.params.id);
};
// Handle Dog create on POST.
exports.Robots_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Robots create POST');
};
// Handle Dog delete from on DELETE.
exports.Robots_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Robots delete DELETE ' + req.params.id);
};
// Handle Dog update form on PUT.
exports.Robots_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Robots update PUT' + req.params.id);
};
 
 
exports.Robots_list = async function(req, res) {
    try{
    theRobots = await Robots.find();
    res.send(theRobots);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
 
exports.Robots_view_all_Page = async function(req, res) {
    try{
    theRobotss = await Robots.find();
    res.render('Robots', { title: 'Robots Search Results', results: theRobots });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
 
 
    // Handle food create on POST.
exports.Robots_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Robots();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.Robot_type = req.body.Robot_type;
    document.price = req.body.price;
    document.manufactured = req.body.manufactured;
    
 
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };