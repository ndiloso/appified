
Router.waitOn(function() {
  if (Meteor.user()) {
    Meteor.subscribe('userProfile');
  }
})


Router.route('/', function(){
	this.render('home');
},{
   name:'home',
   layoutTemplate: 'main'
});

Router.route('/login', function () { //name shown in the browser header
  this.render('login'); //name of template
}, {
  name: 'login', //same name in link for href in header
  layoutTemplate: 'main'
});

Router.route('/about-us', function () { //name shown in the browser header
  this.render('aboutus'); //name of template
}, {
  name: 'aboutus' ,//same name in link for href in header
layoutTemplate: 'main'
});


Router.route('/learn-with-TutorMe', function () { //name shown in the browser header
  this.render('learnDescription'); //name of template
}, {
  name: 'learnDescription', //same name in link for href in header
  layoutTemplate: 'main'
});



Router.route('/Teach-with-TutorMe', function () { //name shown in the browser header
  this.render('teachDescription'); //name of template
}, {
  name: 'teachDescription' ,//same name in link for href in header
  layoutTemplate: 'main'
});

Router.route('/my-profile', function () { //name shown in the browser header
  this.render('UserProfileEdit'); //name of template
}, {
  name: 'UserProfileEdit', //same name in link for href in header
   layoutTemplate: 'main'
});

Router.route('/learner/home', function () { //name shown in the browser header
  this.render('learnerHome'); //name of template
}, {//for routing to home page of learner after signup
  name: 'learnerHome', //same name in link for href in header
  layoutTemplate: 'main'
});

Router.route('/teacher/home', function () { //name shown in the browser header
  this.render('teacherHome'); //name of template
}, {//for routing to home page of teacher after signup
  name: 'teacherHome', //same name in link for href in header
  layoutTemplate: 'main'
});

Router.route('/register', function () { //name shown in the browser header
  this.render('register'); //name of template
}, {//for routing to home page of teacher after signup
  name: 'register', //same name in link for href in header
  layoutTemplate: 'main'
});



