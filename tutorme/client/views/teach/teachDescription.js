Template.teachDescription.helpers({
	AccountSchema: function () {
		return AccountSchemas.signup;
	}
})

AutoForm.hooks({
  registerTeacher: {
  	onSubmit: function(insertDoc, updateDoc, currentDoc) {
  	   options = {
  	   	email: insertDoc.email,
  	   	password: insertDoc.password,
  	   	profile: {
  	   		firstName: insertDoc.firstName,
  	   		lastName: insertDoc.lastName,
  	   		birthday: insertDoc.birthday,
  	   		location: insertDoc.location,
  	   		student_id: insertDoc.student_id,
  	   		phone: insertDoc.phone,
  	   		gpa: insertDoc.gpa,
  	   		level: insertDoc.level,
  	   		department: insertDoc.department
  	   	},
        type: "teacher"
  	   }

  	   Meteor.call("createAccount", options, function (error) {
  	   		if (!error) {
  	   			Meteor.loginWithPassword(options.email, options.password, function(error) {
  	   				if (!error) {
  	   					Router.go('teacherHome');
  	   				}
  	   			})
  	   		}
  	   })
  	   this.done();
  	   return false;
  	 }
  }
});