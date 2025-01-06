let name = {
  firstName: "Harini",
  lastName: "Gurram",
  printName: function () {
    console.log(this);
  },
};
function show() {
  console.log("inside function", this); //prints window object
}
show();
const arrow = () => {
  console.log("inside arrow", this); //prints window object
};
arrow(); //calls arrow function
console.log("ouside context", window.navigator); //prints window object
window.navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(`Latitude: ${position.coords.latitude}`);
    console.log(`Longitude: ${position.coords.longitude}`);
  },
  (error) => {
    console.error(error.message);
  }
);
name.printName(); //prints the name object
console.log(name.printName); //prints function definition
console.log(name.printName()); //prints undefined as this doesn't function is not returning anything
