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
