import { Meteor } from 'meteor/meteor';
import { AccountsServer } from 'meteor/accounts-base';
import '../imports/api/routines.js';

Meteor.startup(() => {
  	Accounts.onCreateUser(function(options, user) {
	  user.routines = [{
	  	name: "Morning Routine",
	  	habits: [{
	  		name: "Gym",
	  		days: {
	  			Monday: true
	  		},
	  		log: [{
	  			date: new Date(),
	  			status:0,
	  			reps: 20
	  		}]
	  	}]
	  },{
	  	name: "Evening Routine",
	  	habits: [{
	  		name: "Study",
	  		days: {
	  			Tuesday: true
	  		},
	  		log: [{
	  			date: new Date(),
	  			status:1,
	  			reps: 15
	  		}]
	  	}]
	  }];

	  return user;
	});
});

