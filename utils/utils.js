//function to be tested
module.exports.add = (a, b) => a + b;

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 100);
  //note. If test takes longer than 2 second then Mocha calls fail
};

module.exports.asyncSquared = (x, callback) => {
  setTimeout(() => {
    callback(x * x);
  }, 100);
};

module.exports.squared = (x) => x * x;

module.exports.setName = (user, fullName) => {
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};
