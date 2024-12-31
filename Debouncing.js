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
