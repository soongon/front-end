// Immediately Invoked Function Expressions(IIFE)
// 일반적으로 변수들을 별도의 스코프 안에서만 쓰기 위해서 사용되었습니다.
// ES6에서는 블록을 기반으로 스코프를 만들 수 있게 되었으므로, 더 이상 함수 기반으로 스코프를 만들지 않아도 됩니다.

(function () {
    var food = '통조림';
})();

console.log(food);