// 맵(Map)
// 맵은 자바스크립트에서 자주 필요한 데이터 구조입니다. ES6 이전엔 객체를 이용해서 해시 맵을 생성했습니다.
var map = new Object();
map[key1] = 'value1';
map[key2] = 'value2';


/// es6 에서는 사용법이 좀 바뀌었습니다. get, set 그리고 search 등의 메소드를 제공합니다.
let map = new Map();
map.set('name', 'kim');
map.get('name'); // kim
map.has('name'); // true


// 맵은 더 이상 키 값으로 문자열만 쓰지 않아도 됩니다.
// 이제 키 값으로 어떤 타입을 전달해도 문자열로 바뀌지 않습니다.
let map = new Map([
    ['이름', 'kim'],
    [true, 'false'],
    [1, '하나'],
    [{}, '객체'],
    [function () {}, '함수']
]);

for (let key of map.keys()) {
    console.log(typeof key);
    // > string, boolean, number, object, function
}
// 함수나 객체처럼 기본형 데이터 타입이 아니면 map.get() 같은 메소드를 사용할 때 비교 연산자가 제대로 동작하지 않습니다.
// 따라서, 문자열, 불린, 숫자 같은 기본형 데이터 타입을 쓰는 것이 좋습니다.


// entries()를 사용하면 맵을 순회할 수 있습니다.
for (let [key, value] of map.entries()) {
    console.log(key, value);
}
