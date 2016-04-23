import { Meteor } from 'meteor/meteor';
import { AccountsServer } from 'meteor/accounts-base';
import { Routines } from '../imports/api/routines.js';


Meteor.startup(() => {
  	Accounts.onCreateUser(function(options, user) {
      Routines.insert({
        text: "Morning Routine",
        createdAt: new Date(), // current time
  			owner: Meteor.userId(), //id of logged in userID
  			username: user.username //username of logged in user
      });
      Routines.insert({
        text: "Evening Routine",
        createdAt: new Date(), // current time
  			owner: Meteor.userId(), //id of logged in userID
  			username: user.username //username of logged in user
      });
	  // user.Routines = [{
	  // 	name: "Morning Routine",
	  // 	habits: [{
	  // 		name: "Gym",
	  // 		days: {
	  // 			Monday: true
	  // 		},
	  // 		log: [{
	  // 			date: new Date(),
	  // 			status:0,
	  // 			reps: 20
	  // 		}]
	  // 	}]
	  // },{
	  // 	name: "Evening Routine",
	  // 	habits: [{
	  // 		name: "Study",
	  // 		days: {
	  // 			Tuesday: true
	  // 		},
	  // 		log: [{
	  // 			date: new Date(),
	  // 			status:1,
	  // 			reps: 15
	  // 		}]
	  // 	}]
	  // }];

	  return user;
	});
});
