var events = require("events");
var emitter = new events.EventEmitter();
var username = "Alliance";
var password = "Password";
emitter.on("UserAdded", function (username, password) {
    console.log("Added User " + username);
});
emitter.emit("UserAdded", username, password);