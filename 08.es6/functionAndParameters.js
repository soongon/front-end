// 디폴트 파라미터(Default Parameter)
function addTwoNumbers(x, y) {
    x = x || 0;
    y = y || 0;
    return x + y;
}


// ES6에서는 함수 내 파라미터의 디폴트 값을 간단하게 설정할 수 있습니다.
function addTwoNumbers(x=0, y=0) {
    return x + y;
}
addTwoNumbers(2, 4); // 6
addTwoNumbers(2); // 2
addTwoNumbers(); // 0



// 레스트 파라미터(Rest Parameter)
// ES5에서는 인수의 숫자가 가변적인 경우 다음과 같이 처리했습니다.
function logArguments() {
    for (var i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}


// 레스트(rest)연산자를 사용하면, 다음과 같이 가변적인 숫자의 인수를 넘길 수 있습니다.
function logArguments(...args) {
    for (let arg of args) {
        console.log(arg);
    }
}



// 네임드 파라미터(Named Parameter)
// ES5의 네임드 파라미터를 처리하는 방법 중 하나는 jQuery에서 차용된 options object 패턴을 사용하는 것입니다.
function initializeCanvas(options) {
    var height = options.height || 600;
    var width  = options.width  || 400;
    var lineStroke = options.lineStroke || 'black';
}



// 파라미터에 destructuring을 사용하면 같은 기능을 구현할 수 있습니다.
function initializeCanvas(
    { height=600, width=400, lineStroke='black'}) {
        // 여기에서 height, width, lineStroke 변수를 사용합니다.
}



// 만약 모든 파라미터를 선택적으로 넘기고 싶다면, 다음과 같이 빈 객체로 destructuring 하면 됩니다.
function initializeCanvas(
    { height=600, width=400, lineStroke='black'} = {}) {
        // ...
    }



// 전개 연산자(Spread Operator)
// ES5에서는 배열 내 숫자들의 최대 값을 찾기 위해서 Math.max에 apply 메소드를 사용했습니다.
Math.max.apply(null, [-1, 100, 9001, -32]); // 9001

// ES6에서는 이제 전개 연산자를 이용해서 함수에 파라미터로 배열을 넘길 수 있습니다.
Math.max(...[-1, 100, 9001, -32]); // 9001


// 다음과 같이 직관적인 문법을 통해 쉽게 배열 리터럴을 합칠 수도 있습니다.
let cities = ['서울', '부산'];
let places = ['여수', ...cities, '제주']; // ['여수', '서울', '부산', '제주']
