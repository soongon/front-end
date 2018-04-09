
// 문자열에도 includes()와 repeat() 등 메소드가 추가되었습니다.

// es5 indexOf()
var string = 'food';
var substring = 'foo';

console.log(string.indexOf(substring) > -1);

// es6 includes()
const string = 'food';
const substring = 'foo';

console.log(string.includes(substring)); // true



// es5 repeat( )
function repeat(string, count) {
    var strings = [];
    while(strings.length < count) {
        strings.push(string);
    }
    return strings.join('');
}


// String.repeat(numberOfRepetitions)
'야옹'.repeat(3); // '야옹야옹야옹'


// 템플릿 리터럴
// 명시적인 문자열 이스케이프를 사용하지 않아도 특수문자를 포함한 문자열을 구축할 수 있습니다.

var text = "이 문자열은 이스케이프 된 \"큰 따옴표\"를 포함합니다.";
let text = `이 문자열은 이스케이프 된 "큰 따옴표"를 포함합니다.`;


// 문자열 Interpolation도 지원합니다.

var name = '나비';
var age = 13;

console.log('제 고양이의 이름은 ' + name + '이고, 나이는 ' + age + '살 입니다.');

// 더 간단하게 구현하면,

const name = '나비';
const age = 13;

console.log(`제 고양이의 이름은 ${name}이고, 나이는 ${age}살 입니다.`);
