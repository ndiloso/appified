Template.sidebar.helpers({

       department: function(){

          return Department.find({}, {

            sort:{
            	name: 1
            }
          });

       }

})