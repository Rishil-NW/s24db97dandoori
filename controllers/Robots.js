
var Robots = require('../models/Robots');
// List of all Robots
exports.Robots_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Robots list');
};
// for a specific Robots.
exports.Robots_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Robots detail: ' + req.params.id);
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
exports.Robots_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Robots update PUT' + req.params.id);
};

// List of all Robots
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

   // VIEWS
// Handle a show all view
exports.Robots_view_all_Page = async function(req, res) {
    try{
    theRobots = await Robots.find();
    res.render('Robots', { title: 'Robots Search Results', results: theRobots });
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
    document.Robots_type = req.body.Robots_type;
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
   }

   // specific Robots. lab-12 s-1
exports.Robots_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Robots.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   }
   
   //lab-12 s-2
   exports.Robots_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Robots.findById(req.params.id)
        // Do updates of properties
        if (req.body.Robot_type)
            toUpdate.Robot_type = req.body.Robot_type;
        if (req.body.price) toUpdate.price = req.body.price;
        if (req.body.manufactured) toUpdate.manufactured = req.body.manufactured;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }
};

// Handle Robots delete on DELETE.
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

exports.Robots_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Robots.findById(req.query.id)
    res.render('Robotsupdate', { title: 'Robots Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    //s9

    exports.Robots_delete_Page = async function (req, res) {
        console.log("Delete view for id " + req.query.id)
        try {
            result = await Robots.findById(req.query.id)
            res.render('Robotsdelete', {
                title: 'Robots Delete', toShow:
                    result
            });
        }
        catch (err) {
            res.status(500)
            res.send(`{'error': '${err}'}`);
        }
    };
