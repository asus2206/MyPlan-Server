/**
 * EventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	// Controller sucht mir Events nach Monat aus dem Kalender.
	eventsOfMonth:function(req,res)
	  {
	    var month = req.param('month');
	    Event.find({Month:month})
	        .exec(function(err,events){

	          if(err)
	            res.json({error:err});
	          if(events === undefined)
	            res.notFound();
	          else
	            res.json(events);
	        });
	  },

	numberOfEvents:function(req, res){
		var user = req.param('user');
		Event.count({User:user})
			.exec(function (err, num) {
			    if(err) {
			       return console.log(err);
			    }
			    else{
			    	console.log(num);
			    	return num;
			    }
			});
	}
};

