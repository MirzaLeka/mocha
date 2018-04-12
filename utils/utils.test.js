const utils = require("./utils");
const expect = require("expect");

it('should add two numbers', () => {
var res = (utils.add(33,11));

expect(res).toBe(44).toBeA('number');

/*
if (res!= 44) {
throw new Error(`Expected 44, but got ${res}`);
}*/


});

// Asynch test
it('Should asynch add two numbers', (done) => {
utils.asynchAdd(4,3, (sum) => {
expect(sum).toBe(7).toBeA('number');
done(); //At the end
});

});

it('Solution is 25', () => {

let solution = utils.multiply(5);

/*
if (solution != 25) {
throw new Error(`Expected 25, but got ${solution}`);
}*/

// expecting solution to be equal to 25 and expecting it to be a number
expect(solution).toBe(25).toBeA('number');

});

it('Should expect some values', () => {

// Number == Number, boolean == boolean, string == string
expect(12).toBe(12);
expect(13).toNotBe(24);
expect("Mirza").toBe("Mirza");

// Object == Object
expect({ name: "Mirza" }).toEqual({ name: "Mirza"});
expect({ age: 23 }).toNotEqual({ age: 24});

// Array/Objects include
expect([2,3,4]).toInclude(2);

// Array/Objects exclude
expect({
name: "Mirza",
age: 23,
location: "Bosnia"
}).toExclude({
age: 25 //it has an age, but 23, not 25, thus excluding 25 this test will pass
});

});

//Final test
// Test should verify if first and last names are set
// Make sure first and last name include proper values

it('Should set first and last name', () => {

/* Since first parameter is object, we create custom made object 
just to give JS a clue that user is indeed an object  */
var user = {location: 'Bosnia', age: 25}; 

/* We add two more attributes to our user object through fullName
 and then we split that fullName into first and last name */
var res = utils.setName(user, "Mirza Leka");

expect(res).toInclude({
firstName: 'Mirza',
lastName: 'Leka'
});

});


