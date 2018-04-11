const utils = require("./utils");

it('should add two numbers', () => {
var res = (utils.add(33,11));

if (res!= 44) {
throw new Error(`Expected 44, but got ${res}`);
}


});

it('Solution is 25', () => {

let solution = utils.multiply(5);

if (solution != 25) {
throw new Error(`Expected 25, but got ${solution}`);
}

});
