AccountSchemas= {}

AccountSchemas.signup = new SimpleSchema({
	email: {
		type: String,
		regEx: SimpleSchema.RegEx.Email,
		label: 'Email' 
	},
	password: {
		type: String
	},
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
})