// 타입 추론 기본 1
let a = 'abc';

function getB (b = 10) {
    let c = 'hello'
    return b + c;
}


//타입 추론 기본 2

// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// let shoppingItem: Dropdown<string> = {
//     value: 'hello',
//     title: 'hellooo',
// }

// 타입 추론 기본 3 
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailDropDown<K> extends Dropdown<K> {
    destcription: string;
    tag: K;
}

// let detailedItem : DetailDropDown<number> = {
//     title : "avc", 
//     destcription : 'ab',
//     value : 'a',
//     tag : 'b'
// } 

// Best Common Type 
// 유니온타입으로 지정됨

var arr = [1,2,true, 'ab', null];  


