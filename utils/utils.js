module.exports.add = (a,b) => a+b;

module.exports.asynchAdd = (a,b, callback) => {

setTimeout(() => {

callback ( a + b);

}, 1000);


};

module.exports.multiply = a => Math.pow(a,2);

module.exports.setName = (user, fullName) => {
var names = fullName.split(' ');
user.firstName = names[0];
user.lastName = names[1];
return user;
};