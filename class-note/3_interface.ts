
// 변수에 활용한 인터페이스
let taehee : User = {
    age: 26, 
    name: '태희'
}
interface User {
    age: number,
    name: string
}

// 함수에 인터페이스 활용 
function getUser(user : User) {
    console.log(user)
}

const capt = {
    age: 26,
    name: "태희",
}
getUser(capt);


// 함수의 스펙(구조)에 인터페이스를 활용 
interface SumFunc {
    (a: number, b:number) : number
}

let summ : SumFunc;
summ = function(a: number, b:number) :number  {
    return a+b;
}

//인덱싱 (가장 많이 쓰는 방식)
interface StringArray {
    [index: number] : string;
}
let arr : StringArray = ['a', 'b', 'c'];
// arr[0] = 10

// 딕셔너리 패턴 
interface StringRegexDictionary {
    [key : string] : RegExp
}

let obj = {
    // sth: /abc/, 
    // 모든 css 파일 불러오는 정규식
    cssFile : /\.css$/, 
    jsFile: /\.js$/,
}

// obj['cssFile'] = 'a'

Object.keys(obj).forEach(function(value) {

})


// 인터페이스 확장 (상속)

interface Personnn {
    name: string;
    age: number;
}

interface Developer extends Personnn {
    language: string
}

let josh : Developer = {
    name: '조시',
    age: 100,
    language: 'TS',
}