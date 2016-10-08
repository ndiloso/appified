Meteor.methods({
	createAccount: function (options) {//done as user is created
		return Accounts.createUser(options);
	}
});