function doMagic(func, context) {
  func.apply(context); //applies the user context(this) to the current functon to access
}
const user = {
  name: "Alice",
  sayHello: function greeting(arg) {
    // const args = arg;
    return doMagic(function () {
      console.log(arg + this.name); //remembers the variable arg due to closures concept (The callback function inside doMagic is binded to the closure of greeting)
      // this.sayHello(arg); //infinitely calls the greeting function
    }, this); //here this refers to the user object context like name and sayHello
  },
};
user.sayHello("Hello");

let cnt = 0;
function getData(argStr) {
  console.log("Fetching data", cnt++, argStr);
}
function debounce(func, delay) {
  let timer;
  return function (...args) {
    //collects all the args
    clearTimeout(timer);
    timer = setTimeout(() => {
      // func.apply(this, args);
      func(args); //calls the function with args and uses the args whenever required
    }, delay);
  };
}

// If debounce function doesn't return any function then handleInputChange is undefined so it throws error
//When you comment out the return function() line in the debounce implementation, the debounce function no longer returns a new function for the event handler.
const handleInputChange = debounce(getData, 3000);
handleInputChange("Hehehe");
