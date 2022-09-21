// 타입 호환: 차집합 느낌

//인터페이스 
interface Developer {
    name: string;
    skill:string;
}

// interface Person {
//     name: string;
// }

class Person {
    name: string;
    // skill: string;
}

let developer : Developer;
let person : Person;

// developer = new Person();
// developer = person


// 함수
let add = function (a: number) {
    //...

}

let sum = function (a: number, b: number) {
    //...
    //return a + b
}

//sum = add;
// add = sum;


// 제네릭
interface Empty<T> {
    // ... 

}

let empty1 : Empty<string>; 
let empty2 : Empty<number>;

// empty1 = empty2
// empty2 = empty1

interface NotEmpty<T> {
    data: T; 
}

let notEmpty1 : NotEmpty<string>;
let notEmpty2 : NotEmpty<number>;

// notEmpty1 = notEmpty2
// notEmpty2 = notEmpty1