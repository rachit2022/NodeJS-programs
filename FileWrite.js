var fs = require("fs");
fs.writeFile("text2.txt", "Hello World", function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Write operation completed!");
    }
});