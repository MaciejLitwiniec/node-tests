const expect = require('expect');

const utils = require('./utils');

//tests- behaviour driven development

//test case
//first argument in function tells what test is doing
//second argument in function tells
it('should add 2 numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
  // replaced with Expect assertion library
  // if (res !== 44){
  //     throw new Error(`Expected 44, but got ${res}`);
  // }
});

//in order to properly test asynchronus function we need to provide 'done' in callback function
//this will tell Mocha that test needs more time (asynchronus function)
it('should async add 2 numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should be squared', () => {
  var res = utils.squared(2);

  expect(res).toBe(4).toBeA('number');
  // if (res !== 4){
  //   throw new Error(`Expected 4, but got ${res}`);
  // }
});

it('should be asynch squared', (done) => {
  utils.asyncSquared(5, (res) => {
    expect(res).toBe(25).toBeA('number');
    done();
  });
});


//should verify first name and last name are not empty
//creation of user object with like age and location
//pass user as argument
//pass firstname and last name

//assert taht returning object using to include first name and last name as proper values
//check if what we are passing is an object

it('should set firstname and lastname', () => {
  var user = {age: '29', location: 'Warsaw'};

  var res = utils.setName(user, 'Maciej Litwiniec');
  //expect(user).toEqual(res);
  expect(res).toInclude({
    firstName: 'Maciej',
    lastName: 'Litwiniec'
  });
});

// it('should expect some values', () => {
//   //expect(12).toNotBe(11);
//
//   //.toBe use ===
//   //to compare 2 objects we need to use .toEqual
//   //expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//
//   //object property || array element check
//   // expect([2,3,4]).toInclude(2);
//   expect({
//     name: 'Maciej',
//     age: 25,
//     location: 'Warsaw'
//   }).toInclude({
//     age: 25
//   });
// });
