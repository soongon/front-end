// Promise는 다음과 같이 수평적인 코드(콜백 지옥)의 형태를 바꿀 수 있게 해줍니다.
func1(function (value1) {
    func2(value1, function (value2) {
        func3(value2, function (value3) {
            func4(value3, function (value4) {
                func5(value4, function (value5) {
                    // Do something with value 5
                });
            });
        });
    });
});



// 수직적인 코드로 바꾸면,
func1(value1)
    .then(func2)
    .then(func3)
    .then(func4)
    .then(func5, value5 => {
        // Do something with value 5
    });


// ES6 이전엔, bluebird(https://github.com/petkaantonov/bluebird)
// 혹은 Q(https://github.com/kriskowal/q)같은 라이브러리를 사용했었습니다.
// 이제는 Promise가 네이티브로 지원됩니다.
new Promise((resolve, reject) =>
    reject(new Error('Promise가 제대로 동작하지 않았습니다!')))
        .catch(reason => console.log(reason));



// Promise가 제대로 동작(fulfill)했을 때 호출되는 resolve 메소드와
// Promise가 제대로 동작하지 않았을 때(rejected) 호출되는 reject 메소드를 이용해 Promise를 다룰 수 있습니다.
// Promise의 장점: 중첩된 콜백 코드에서는 에러 핸들링하기가 혼란스럽습니다.
// Promise를 사용하면 에러를 적절히 위로 깨끗하게 전파할 수 있습니다.
// 게다가, resolve/reject된 후의 Promise의 값은 불변입니다.


// 아래는 Promise를 사용하는 실질적인 예제입니다.
var request = require('request');

return new Promise((resolve, reject) => {
  request.get(url, (error, response, body) => {
    if (body) {
        resolve(JSON.parse(body));
      } else {
        resolve({});
      }
  });
});




// 또한 Promise.all()을 사용해서 비동기 동작들의 배열을 다루는 Promise를 병렬화할 수 있습니다.

let urls = [
  '/api/commits',
  '/api/issues/opened',
  '/api/issues/assigned',
  '/api/issues/completed',
  '/api/issues/comments',
  '/api/pullrequests'
];

let promises = urls.map((url) => {
  return new Promise((resolve, reject) => {
    $.ajax({ url: url })
      .done((data) => {
        resolve(data);
      });
  });
});

Promise.all(promises)
  .then((results) => {
    // Do something with results of all our promises
 });
