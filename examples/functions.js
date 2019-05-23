const arr = ['hello', 'my', 'new', 'world'];

// function print(str, i) {
//   return console.log(`${i}: ${str}`);
// }

const print = (str, i) => console.log(`${i}: ${str}`);

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
  
//   print(element, i);
// }


const obj = { 
  className: 'my class name'
}

// const classList = obj.className ? obj.className.split(' ') : [];

let classList;

if (obj.className) {
  classList = obj.className.split(' ');
} else {
  classList = [];
}
arr.forEach(print);