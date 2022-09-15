//JS 문자열 선언
// let str = "hello";

// TS 문자열 선언
// TS 문자열
let str: string = "hello";

// TS숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
// let heroes: Array<string> = ["캡틴", "토르", "헐크", 10];
let items: number[] = [1, 2, 3]; // 전체 타입

// TS 튜플
// 각 자리마다 설정
let address: [string, number] = ["Gangnam", 100];

// TS 객체
let obj: object = {};
let person: object = {
  name: "taehee",
  age: 10,
};

let person2: { name: string; age: number } = {
  name: "taeehee",
  age: 10,
};

// TS  진위값
let show: boolean = true;
