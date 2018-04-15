const request = require("supertest");
var app = require('./server').app;
const expect = require("expect");

it('should return hello world response', (done) => 
{

 request(app) // const app u server.js-u koji smo exportali
.get("/") // na kojoj se ruti nalazi ono sto testiramo =>  '/'
//.expect(200) //Optional => ocekuje 200 status kod
//.expect('Hello World!') //ocekuje HW! jer smo send-ali upravo to

//Ovo ce vratiti 404 objekat iz server.js jer je i tamo isto kao i ovamo
/*.expect(404)
.expect({
    error: "Page not found."
})*/

//expect HTML response sa funkcijo
.expect((res) => {
  //Using custom assertions  sa supertestom
expect(res.body).toInclude({
    error: "Page not found." //provjeravamo da li nas objekat ima atribut error sa ovom vrijednosti
});
})

.end(done); //kraj testa

});

// npm run test watch

it('should check list of users', (done) => {

request(app)
.get("/users")
.expect((response) => {
//ocekujemo da array sadrzi neki objekat sa ovim svojstivma
expect(response.body).toInclude(
  {
    name: "Mirza",
    age: 23
  }
);

})
.end(done);
//RADI!
});