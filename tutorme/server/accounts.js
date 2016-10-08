Accounts.onCreateUser(function(options, user) {//checks the role before user is created
	user.profile = options.profile;
	user.roles = [options.type];
	return user;
})