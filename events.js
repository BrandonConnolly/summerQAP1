const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// Define event listeners to display the msg you would like
myEmitter.on("action", (event) => {
  if (event === "success") {
    console.log("You did it!");
  } else if (event === "failure") {
    console.log("Try again");
  }
});

// Emit the event based on a condition. True or false.
const isSuccess = false; // Set this to true or false here
if (isSuccess) {
  myEmitter.emit("action", "success"); // Output: You did it!
} else {
  myEmitter.emit("action", "failure"); // Output: Try again
}

// Basic code for events.
// This would allow you to tell someone visiting your webiste if they have done something correctly or not.
// Displaying the message for something done correcty or them needing to try again.
// Such as eventing vaild information like a postal code
