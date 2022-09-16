// class 이전 문접
function Person111(name, age) {
    this.name = name;
    this.age = age;
}

let hee = new Person111('캡틴', 100)

// class 문법 (설탕)
class Person11 {
    //클래서 로직
    constructor(name, age) {
        console.log('생성되었습니다')
        this.name = name;
        this.age  = age;
    }

}

let tae = new Person11('태희', 100);
console.log(tae); // Person11{name:"태희", age: 100}

