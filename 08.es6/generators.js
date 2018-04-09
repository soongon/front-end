// 제너레이터(Generator)
// Promise를 이용해 콜백 지옥(http://callbackhell.com/)을 피하는 것과 비슷하게,
// 제너레이터도 비동기적인 동작을 동기적인 느낌으로 만들어서 코드를 평평(flat)하게 만들 수 있도록 해줍니다.
// 제너레이터는 근본적으로 코드의 실행을 중지(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)하고
// 나중에 표현식의 값을 돌려주는 함수입니다.

// 다음은 제너레이터를 사용하는 간단한 예입니다.
function* sillyGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

var generator = sillyGenerator();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: 4, done: false }



// next(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next)를
// 사용하면 제너레이터를 전진시키고 새로운 표현식을 계산합니다.
// 다음과 같이 제너레이터는 비동기적인 코드를 동기적인 방식으로 작성하는데에 활용할 수 있습니다.

// 제너레이터를 이용해 비동기 동작을 숨김
function request(url) {
    getJSON(url, function(response) {
        generator.next(response);
    });
}

// 그리고 데이터를 돌려줄 제너레이터 함수를 작성합니다.
function* getData() {
    var entry1 = yield request('http://some_api/item1');
    var data1  = JSON.parse(entry1);
    var entry2 = yield request('http://some_api/item2');
    var data2  = JSON.parse(entry2);
}


// yield 덕분에, data1에 데이터가 파싱될 필요가 있을 때에만
// entry1이 데이터를 가질 것임을 보장할 수 있습니다.

// 제너레이터는 비동기적인 코드를 동기적인 방식으로 작성하는데 도움을 주지만,
// 에러 전파는 깨끗하지 않고 쉽지 않은 경로를 통해 해야 합니다.
// 그렇기 때문에, Promise를 통해 제너레이터를 보완할 수 있습니다.
function request(url) {
    return new Promise((resolve, reject) => {
        getJSON(url, resolve);
    });
}


// 그리고 next를 사용하는 제너레이터를 통해 단계별로 진행하는 함수를 작성합니다.
// next는 request 메소드를 사용하여 위의 Promise를 돌려줍니다.
function iterateGenerator(gen) {
    var generator = gen();
    (function iterate(val) {
        var ret = generator.next();
        if(!ret.done) {
            ret.value.then(iterate);
        }
    })();
}


// Promise를 통해 제너레이터를 보완함으로서,
// Promise의 catch와 reject를 활용해 에러 전파를 깨끗하게 할 수 있게 되었습니다.
// 다음과 같이 새롭게 개선된 제너레이터를 사용하면 전보다 더 간단합니다.
iterateGenerator(function* getData() {
    var entry1 = yield request('http://some_api/item1');
    var data1  = JSON.parse(entry1);
    var entry2 = yield request('http://some_api/item2');
    var data2  = JSON.parse(entry2);
});
