Meteor.publish('userProfile', function() {
  return Meteor.users.find({
    _id: this.userId
  }, {
    fields: {
      profile: 1,
      emails: 1,
      roles: 1
    }
  });
});