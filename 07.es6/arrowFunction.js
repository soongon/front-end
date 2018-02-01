// 다음과 같이 중첩된 함수 안에서 this의 context를 보존해야 할 일이 있습니다.

function Person(name) {
    this.name = name;
}

Person.prototype.prefixName = function (arr) {
    return arr.map(function (character) {
        return this.name + character; // Cannot read property 'name' of undefined
    });
};



// Best Practice:
// this의 context 값을 보존해야할 때마다 애로우 펑션을 사용하세요.
// 가능하다면 함수 표현식 대신 애로우 펑션을 활용하세요.