var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  //check if the email already exists

  //save the user to the database
  //we dont have an user so we need to create one
  db.saveUser({
    // email: email,
    // password: password
    email,
    password
  });


  //send that welcome email
};
