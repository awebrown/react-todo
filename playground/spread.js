// function add(a,b) {
//   return a + b;
// }
//
// console.log(add(1, 3));
//
// let toAdd = [9, 5];
//
// console.log(add(...toAdd));

// let personOne = ['Tony', 34];
//
// function greeting(name, age) {
//   return 'Hello ' + a + ', you are ' + b;
// }
//
// console.log(greeting(...personOne))

let names = ['mike', 'ben'];
let final = ['tony'];

function combine() {
  return final = [...names, ...final]
}

combine();
console.log(final);

final.forEach(function(name){
  console.log('Hi ' + name)
})
