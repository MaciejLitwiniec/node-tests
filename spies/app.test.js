const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js')
//we can use these to mockup data inside app.js
//app.__set__
//app.__set__


describe('app', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);


  it('should call the spy correctly', () => {
    var spy = expect.createSpy();

    //spies comes from expect documentation
    // spy();
    // expect(spy).toHaveBeenCalled();
    spy('Maciej', 29);
    expect(spy).toHaveBeenCalledWith('Maciej', 29);
  });

  it('should call saveUser with user object', () => {
    var email = 'Maciej@example.com';
    var password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});
