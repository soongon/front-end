// ES6 이전에는, 생성자 함수(constructor)를 만들고 프로토타입을 확장해서 프로퍼티를 추가하여 클래스를 구현했습니다.
function Person(name, age, gender) {
    this.name   = name;
    this.age    = age;
    this.gender = gender;
}

Person.prototype.incrementAge = function () {
    return this.age += 1;
};



// 그리고 다음과 같이 클래스를 상속했습니다.
function Personal(name, age, gender, occupation, hobby) {
    Person.call(this, name, age, gender);
    this.occupation = occupation;
    this.hobby = hobby;
}

Personal.prototype = Object.create(Person.prototype);
Personal.prototype.constructor = Personal;
Personal.prototype.incrementAge = function () {
    Person.prototype.incrementAge.call(this);
    this.age += 20;
    console.log(this.age);
};



// ES6는 이런 간단한 구현을 위해 편리한 문법을 제공합니다. 이제 클래스를 직접 만들 수 있습니다.
class Person {
    constructor(name, age, gender) {
        this.name   = name;
        this.age    = age;
        this.gender = gender;
    }

    incrementAge() {
      this.age += 1;
    }
}


// 그리고 extends 키워드를 사용해서 상속할 수 있습니다.
class Personal extends Person {
    constructor(name, age, gender, occupation, hobby) {
        super(name, age, gender);
        this.occupation = occupation;
        this.hobby = hobby;
    }

    incrementAge() {
        super.incrementAge();
        this.age += 20;
        console.log(this.age);
    }
}


// Best Practice: 클래스를 만들기 위한 ES6의 문법은 내부적으로 어떻게 프로토타입으로 구현되는지 모호하지만,
// 초보자들에게 좋은 기능이고 더 깨끗한 코드를 작성하도록 도와줍니다.
