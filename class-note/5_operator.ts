// 유니온 타입 : 2가지 이상 타입 사용 가능
let taetae : string | number | boolean
function logMessage(value: string | number) {
    // 타입 가드
    if(typeof value === 'number') {
        value.toLocaleString(); 
        // 숫자에 쓰일 수 있는 속성들 바로 알려줌
    }
    if(typeof value === 'string') {
        value.length; 
        // 숫자에 쓰일 수 있는 속성들 바로 알려줌
    }
    throw new TypeError('value must be string or number')
    // 에러 메세지도 만들 수 있음
}

logMessage('hello');
logMessage(10)

// 유니온 타입의 장점 
// 1. 타입 가드: 특정 타입으로 타입의 범위를 좁혀나가는 (필터링 하는) 과정
// 2. 빠른 추론 가능 > 타입에 맞는 속성만 알려줌
// 3. 에러 메세지 

interface Developerrr {
    name: string;
    skill: string;
}

interface Personnnnn {
    name: string;
    age: number;
}

// 유니온 타입으로 호출
function askSomeone (someone: Developerrr | Personnnnn) {
    // 공통 속성만 가능
    // someone.name


    // age, skill을 사용하고 싶으면 type guide를 사용해야 한다.
}
askSomeone({name : '디벨로퍼',skill : '웹 개발'})
askSomeone({name : '태희', age : 100})

// intersection type (인터섹션 타입)
let hee : string | number | boolean;
let cat : string & number & boolean;

// 인터섹션으로 호출 
function askSomeone1 (someone: Developerrr & Personnnnn) {
    // someone.name
    // someone.age
    // someone.skill

    // age, skill을 사용하고 싶으면 type guide를 사용해야 한다.
}
askSomeone1({name : '디벨로퍼',skill : '웹 개발', age: 200})


// 실무에서는 union 타입을 더 자주 사용

