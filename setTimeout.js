console.log("start");
let timer;
timer = setTimeout(() => console.log("callback"), 5000);
console.log("end");

const startTime = new Date().getTime();
let endTime = startTime;
while (endTime < startTime + 1000) {
  endTime = new Date().getTime();
  console.log("yes");
  clearTimeout(timer); //timeout function is removed from callback queue
}

console.log("after 10 ms");
