// Destructuring은 배열 혹은 객체(깊게 중첩된 것도 포함하여)에서
// 편리한 문법을 이용해 값을 추출하고 저장하는데에 활용됩니다.

// 배열 Destructuring

var arr = [1, 2, 3, 4];
var a = arr[0];
var b = arr[1];
var c = arr[2];
var d = arr[3];

let [a, b, c, d] = [1, 2, 3, 4];

console.log(a); // 1
console.log(b); // 2


// 객체 Destructuring

var luke = { occupation: 'jedi', father: 'anakin' };
var occupation = luke.occupation; // 'jedi'
var father = luke.father; // 'anakin'

let luke = { occupation: 'jedi', father: 'anakin' };
let {occupation, father} = luke;

console.log(occupation); // 'jedi'
console.log(father); // 'anakin'
