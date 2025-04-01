const express = require("express");
const path = require("path");

//create an express app
const app = express();

app.use(
    express.static(
        path.join(__dirname, "views")
    )
);

app.get(
    "/contact",
    function (req, res, next) {
        console.log(req.query);
        next();
    },
    function (req, res, next){
    res.send("<p> Limit</p>");
}
);


/*app.use(
    "/", function (req, res ) {
    res.send("<h1>Home</h1>");
});*/

app.get("/*page/", function (req, res) {
    res.sendFile(path.join(__dirname, "views/404.html"));
})

const port = process.env.PORT || 14959;

app.listen(port);

console.log(`Server running: http:localhost:${port}`);