// Simple Node.js app for SAST testing

function add(a, b) {
  return a + b;
}

function unsafeEval(userInput) {
  // Example of a vulnerability
  eval(userInput); // ⚠️ SAST should catch this
}

const secret = "my_secret_key";

function logMessage(msg) {
  console.log(msg);
}

// Test calls
add(2, 3);
unsafeEval("console.log('test')");
logMessage("Hello world!");
