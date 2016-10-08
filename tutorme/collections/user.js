Schemas.UserProfile = new SimpleSchema({
	firstName: {
		type: String,
		regEx: /^[a-zA-Z-]{2,25}$/,
		optional: true
	},
	lastName: {
		type: String,
		regEx: /^[a-zA-Z]{2,25}$/,
		optional: true
	},
	birthday: {
		type: Date,
		optional: true
	},
	website: {
		type: String,
		regEx: SimpleSchema.RegEx.Url,
		optional: true
	},
	bio: {
		type: String,
		optional: true
	},
	location:{
		type: String,
		optional:true
	},
	student_id:{
		type: String,
		optional:true
	},
    phone:{
		type: String,
		optional:true
	},
	gpa:{
		type: String,
		optional:true
	},
	level:{
		type: Number,
		optional:true
	},
	department:{
		type: String,
		optional:true
	}



});

Schemas.User = new SimpleSchema({
	
	emails: {
		type: [Object],
		optional: true
	},
	"emails.$.address": {
		type: String,
		regEx: SimpleSchema.RegEx.Email
	},
	"emails.$.verified": {
		type: Boolean
	},
	createdAt: {
		type: Date
	},
	profile: {
		type: Schemas.UserProfile,
		optional: true
	},
	services: {
		type: Object,
		optional: true,
		blackbox: true
	},

	roles:{
   	type: [String],
   	optional: true,
   	blackbox:true
   }

});
Meteor.users.attachSchema(Schemas.User);



