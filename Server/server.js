const express = require("express");
const app = express();

app.get("/", (req, res) => {

  //  res.send("Hello World!");

    //Sending the status code
//res.status(404).send("Hello World!");

res.status(404).send({
    error: "Page not found.",
    nane: "Todo app v1.0"
});

} );

app.get("/users", (req, res) => {

    res.send([
        {
            name: "Mirza",
            age: 23
        },
        {
            name: "Ermin",
            age: 23
        },
        {
            name: "Amar",
            age: 24
        }
    ]);

});

app.listen(3000, () => {
console.log("Server is running on port 3000");
});

module.exports.app = app; 
