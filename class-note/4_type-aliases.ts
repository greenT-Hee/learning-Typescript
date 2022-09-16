// 인터페이스를 사용했을 경우
interface Person1 {
    name : string,
    age: number
}


let seho : Person1 = {
    name : '세호',
    age : 30
}

// 타입 별칭 사용
type Person2 = {
    name : string;
    age: number;
}

type MyString = string;
let str: MyString ='hello';

type Todo = {id: string; title: string; done:boolean}
function getTodo(todo: Todo ) {
    
}



// interface와 type 별칭의 차이점
// 1. 마우스 올려보면, 타입 별칭은 자세하게 나오고 interface는 자세하지 않음
// 2. 확장성 여부 
// interface는 extend로 확장이 가능하지만, 타입 별칭은 불가능 
// 좋은 개발은 확장성을 염두해야 함 > inteface 사용 강력 추천