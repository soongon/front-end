// 기존의 var에 더해 let과 const라는 값을 저장하기 위한 두 개의 새로운 식별자가 추가되었습니다.
// var와는 다르게, let과 const 상태는 스코프 내 최상단으로 호이스팅되지 않습니다.

var snack = '허니버터칩';

function getFood(food) {

    if (food) {
        var snack = '스윙칩';
        return snack;
    }
    return snack;
}

getFood(false); // undefined



// 주의
// var를 사용했던 레거시 코드를 리팩토링할 때 더욱 조심해야 합니다.
// 무턱대고 var 대신 let을 사용하면 예상치 못한 동작을 할 수도 있습니다.

// Best Practice:
// 레거시 코드 내에 var선언을 남겨두세요.
// 새로운 코드에서 작업할때, 변수로 let을 사용하고, 상수로 const를 사용하세요.
