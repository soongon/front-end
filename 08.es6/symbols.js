// 심볼은 ES6 이전에도 존재했지만, 이제 직접적으로 심볼을 사용할 수 있는 공식 인터페이스가 제공됩니다.
// 심볼은 고유하고 수정 불가능한 데이터 타입이고 모든 객체의 식별자로 활용할 수 있습니다.

// Symbol()
// Symbol() 혹은 Symbol(description) 메소드를 호출하면 전역적으로 사용할 수 없는 고유한 심볼이 생성됩니다.
// Symbol()은 써드 파티 라이브러리의 객체 혹은 네임스페이스에 충돌할 염려가 없는 새로운 코드가 필요할 때 쓰입니다.
// 예를 들어, 나중에 라이브러리가 업데이트 되더라도 겹칠 우려가 없이
// React.Component 클래스에 refreshComponent 메소드를 추가하고 싶다면 다음과 같이 할 수 있습니다.
const refreshComponent = Symbol();

React.Component.prototype[refreshComponent] = () => {
    // do something
}


// Symbol.for(key)
// Symbol.for(key) 고유하고 수정 불가능한 심볼을 생성하지만, 전역적으로 사용 가능합니다.
// Symbol.for(key)를 두 번 호출하면 두 번 다 같은 심볼 인스턴스를 반환합니다.
// 주의. Symbol(description)에서는 그렇지 않습니다.
Symbol('foo') === Symbol('foo') // false
Symbol.for('foo') === Symbol('foo') // false
Symbol.for('foo') === Symbol.for('foo') // true


// 일반적으로 심볼, 특히 Symbol.for(key)은 상호 운용성을 위해 사용합니다.
// 상호 운용성은 몇 가지 알려진 인터페이스를 포함하는
// 서드 파티 라이브러리의 객체에 인자로 심볼 멤버 형태의 코드를 사용함으로서 만족될 수 있습니다.

function reader(obj) {
    const specialRead = Symbol.for('specialRead');
    if (obj[specialRead]) {
        const reader = obj[specialRead]();
        // do something with reader
    } else {
        throw new TypeError('객체를 읽을 수 없습니다.');
    }
}


// 또 다른 라이브러리에선 이렇게 할 수 있습니다.
const specialRead = Symbol.for('specialRead');

class SomeReadableType {
    [specialRead]() {
        const reader = createSomeReaderFrom(this);
        return reader;
    }
}


// 상호 운용성을 위해 심볼을 사용하는 주목할 만한 예는 모든 반복 가능한(iterable) 타입 혹은 반복자(iterator)에 존재하는 Symbol.iterator입니다.
// 배열, 문자열, 생성자, 등 반복 가능한 타입은 이 메소드를 통해 호출되면 반복자 인터페이스를 포함한 객체 형태로 리턴됩니다.
