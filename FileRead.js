var fs = require("fs");
var data = fs.readFile("text1.txt", function (err, data) {
    if (err) {
        throw err;
    }
    else {
        console.log(data.toString());
    }
});