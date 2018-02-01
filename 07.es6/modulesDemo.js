// ES6 이전엔, 클라이언트 단은 [Browserify](http://browserify.org/),
// Node.js 에서는 [require](https://nodejs.org/api/modules.html#modules_module_require_id)같은 라이브러리를 사용했습니다.
// 이제 ES6에서는 모든 종류(AMD와 CommonJS)의 모듈을 직접적으로 사용할 수 있습니다.

// CommonJS의 모듈 내보내기(Export)
module.exports = 1;
module.exports = { foo: 'bar' };
module.exports = ['foo', 'bar'];
module.exports = function bar () {};



// ES6의 모듈 내보내기
// ES6에서는, 다양한 방식으로 모듈을 내보낼 수 있습니다.
// 그 중 named export 방식은 다음과 같습니다.

export let name = 'David';
export let age  = 25;​​


// 또한 객체를 이용한 리스트 내보내기(exporting a list)방식도 있습니다.
function sumTwo(a, b) {
    return a + b;
}

function sumThree(a, b, c) {
    return a + b + c;
}

export { sumTwo, sumThree };


// 간단하게 export 키워드만 활용하면 함수, 객체, 값 등을 내보낼 수 있습니다.
export function sumTwo(a, b) {
    return a + b;
}

export function sumThree(a, b, c) {
    return a + b + c;
}


// 디폴트 모듈로 내보내기(default binding export)도 가능합니다.
function sumTwo(a, b) {
    return a + b;
}

function sumThree(a, b, c) {
    return a + b + c;
}

let api = {
    sumTwo,
    sumThree
};

export default api;
/* 위 코드는 아래와 같습니다.
 * export { api as default };
 */


// Best Practice: export default 메소드는 항상 모듈 코드의 마지막에 위치해야 합니다.
// 그래야 내보내는 것이 무엇인지 분명해지며, 내보내는 값의 이름을 확인하는 시간을 절약할 수 있습니다.
// 그 이상으로, CommonJS의 일반적인 관행은 단일 값이나 객체를 내보내는 것입니다.
// 이런 컨벤션을 따름으로서, 코드의 가독성을 좋게 만들 수 있고 CommonJS와 ES6 모듈을 모두 사용할 수 있게 됩니다.


// ES6의 모듈 불러오기(import)
// ES6에서는 다양한 방식으로 모듈을 불러올 수 있습니다. 다음과 같이 파일 전체를 불러올 수 있습니다.
import 'underscore';

// 이렇게 단순히 파일 전체를 불러오면 그 파일의 최상단에서 불러온 모든 코드가 실행된다는 점에 유의하시기 바랍니다.
// 파이썬하고 유사한 지정 불러오기(named import)를 사용할 수 있습니다.
import { sumTwo, sumThree } from 'math/addition';

// 다음과 같이 불러온 모듈의 이름을 새로 작성할 수도 있습니다.
import {
    sumTwo as addTwoNumbers,
    sumThree as sumThreeNumbers
} from 'math/addition';

// 거기에 더해서, 모두 불러오기(네임스페이스 불러오기)도 가능합니다.
import * as util from 'math/addition';

// 마지막으로, 모듈에서 값들의 리스트를 불러올 수도 있습니다.

import * as additionUtil from 'math/addition';
const { sumTwo, sumThree } = additionUtil;


// 디폴트 모듈은 다음과 같이 불러올 수 있습니다.
import api from 'math/addition';
// 위 코드는 이렇게 표현할 수도 있습니다: import { default as api } from 'math/addition';
// 가급적 간단한 형태로 모듈을 내보내는 것이 좋지만, 필요하다면 때때로 디폴트 모듈을 포함해 여러 이름을 섞어서 내보낼 수도 있습니다.

// foos.js
export { foo as default, foo1, foo2 };
// 이 모듈은 아래와 같이 불러올 수 있습니다.
import foo, { foo1, foo2 } from 'foos';
// React처럼 CommonJS 문법을 사용해 내보낸 모듈을 불러올 때는 다음과 같이 쓰면 됩니다.
import React from 'react';
const { Component, PropTypes } = React;
// 다음과 같이 더욱 간결해질 수도 있습니다.
import React, { Component, PropTypes } from 'react';


// 주의: 내보내지는 값은 참조되는 것이 아니라 바인딩되는 것입니다.
// 어떤 모듈의 변수 바인딩을 바꾸게 되면 내보낸 모듈 내에서만 바뀌게 됩니다.
// 이렇게 내보낸 모듈의 값의 인터페이스를 바꾸는 것은 피하세요.
