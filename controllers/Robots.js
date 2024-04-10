var Robots = require('../models/Robots');
// List of all Robots
exports.Robots_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Robots list');
};
// for a specific Robots.
exports.Robots_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await Robots.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle Robots create on POST.
exports.Robots_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Robots create POST');
};
// Handle Robots delete from on DELETE.
exports.Robots_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Robots delete DELETE ' + req.params.id);
};
// Handle Robots update form on PUT.
exports.Robots_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Costume.findById( req.params.id)
// Do updates of properties
if(req.body.Robot_type)
toUpdate.Robot_type = req.body.Robot_type;
if(req.body.price) toUpdate.cost = req.body.price;
if(req.body.manufactured) toUpdate.size = req.body.manufactured;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};


exports.Robots_list = async function(req, res) {
    try{
    thefood = await Robots.find();
    res.send(thefood);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
 exports.Robots_view_all_Page = async function(req, res) {
    try{
    thefoods = await Robots.find();
    res.render('Robots', { title: 'Robots Search Results', results: thefoods });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle Robots create on POST.
exports.Robots_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Robots();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.Robot_type = req.body. Robot_type;
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
    // Handle Costume delete on DELETE.
exports.Robots_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Robots.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    // Handle a show one view with id specified by query
    exports.Robots_view_one_Page = async function(req, res) {
        console.log("single view for id " + req.query.id)
        try{
        result = await Robots.findById( req.query.id)
        res.render('Robotsdetail',
        { title: 'Robots Detail', toShow: result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
        };
        // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Robots_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Robotscreate', { title: 'Robots Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    
    
