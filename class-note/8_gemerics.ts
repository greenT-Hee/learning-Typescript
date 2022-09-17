// 일반 함수
// function logText(text) {
//     console.log(text);
//     return text;
// }

// 제너릭
// logText(10) 
// logText('hello world')
// logText(true)

// function logText<T>(text: T) : T {
//     console.log(text)
//     return text;
// }

// logText<number>(10)

// 각각 정의하는 비효율적 코드
// function logText(text: string) {
//     console.log(text);
//     text.split('').reverse().join('')
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

// const a = logText('hello world')
// a.split("")
// logText(10);
// const num = logNumber(10)
// logText(true)


// 제네릭 장점: 타입 추론과 반환값까지 함께 정의 가능
function logText<T>(text : T) : T {
    console.log(text);
    return text;
}

const str = logText<string>('abc')
str.split('')

const login = logText<boolean>(true)


// 인터페이스에 제네릭을 선언하는 방법 
interface Dropdown1 {
    value: string;
    selected: boolean;
}

const obj : Dropdown1 = {
    value: 'hello', 
    selected: false
}

interface Dropdown2<T> {
    value: T;
    selected: boolean
}

const obj1 : Dropdown2<string> = {
    value : 'hello', 
    selected: true,
}

// 제네릭의 타입 제한 1
function logTextLength<T>(text: T[]) : T[] {
    console.log(text.length);
    text.forEach(item => {
        console.log(item)
    })
    return text
}

logTextLength<string>(['hi', 'hello'])

// 제네릭 타입 제한2 - 정의된 타입 이용하기
interface LenthType {
    length: number;
}

function logTextLength1<T extends LenthType>(text: T) :T {
    text.length
    return text
}

logTextLength1('hello')
// logTextLength1(10) // error 
logTextLength1({length : 10})

// 제네릭 타입 제한 3 - key of
interface ShooingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShooingItem>(option : T): T{
    return option
}
// getShoppingItemOption(10)
// getShoppingItemOption<string>('shoes')
getShoppingItemOption("name")
getShoppingItemOption("stock")