// 위크맵(WeakMap)
// ES6 이전에는 private 데이터를 저장하기 위해서 많은 방법을 사용했습니다.
// 그 중 한가지가 네이밍 컨벤션을 이용한 방법이죠.
class Person {
    constructor(age) {
        this._age = age;
    }

    _incrementAge() {
        this._age += 1;
    }
}


// 그러나 네이밍 컨벤션은 코드베이스에 대해 혼란을 일으킬 수 있고, 항상 유지된다는 보장을 할 수 없었습니다.
// 이제 위크맵으로 이런 값을 저장할 수 있습니다.
let _age = new WeakMap();
class Person {
    constructor(age) {
        _age.set(this, age);
    }

    incrementAge() {
        let age = _age.get(this) + 1;
        _age.set(this, age);
        if (age > 50) {
            console.log('중년의 위기');
        }
    }
}


// Private 데이터를 저장하기 위해 위크맵을 사용해서 좋은 점은 `Reflect.ownKeys()`를 사용해도 프로퍼티 이름을 드러내지 않는다는 것입니다.
const person = new Person(50);
person.incrementAge(); // '중년의 위기'
Reflect.ownKeys(person); // []


// 위크맵을 사용하는 더욱 실질적인 예는 DOM 요소 자체를 훼손시키지 않고도 DOM 요소에 관련된 데이터를 저장하는 것입니다.
let map = new WeakMap();
let el  = document.getElementById('someElement');

// 요소에 대한 약한 참조(weak reference)를 저장
map.set(el, '참조');

// 요소의 값에 접근
let value = map.get(el); // '참조'

// 참조 제거
el.parentNode.removeChild(el);
el = null;

value = map.get(el); // undefined


// 위에서 보여준 대로, 객체가 가비지 콜렉터에 의해 한 번 제거된 다음에는
// 위크맵이 자동적으로 해당 객체에 의해 식별되는 key-value 쌍을 제거합니다.
