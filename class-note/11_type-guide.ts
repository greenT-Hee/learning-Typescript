interface Developer { 
    name: string; 
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce() : Developer | Person {
    return {name: 'Tony', age: 33,  skill: 'iron'}
}

let tony = introduce();
console.log(tony.name); // skill은 안됨, union은 공통된 것만 

if ((tony as Developer).skill) { 
    console.log((tony as Developer).skill)
}else if ((tony as Person).age) {
    console.log((tony as Person).age)
}


// 타입 가드 정의 
// 아주 중요한 패턴
function isDeveloper(target: Developer | Person) : target is Developer {
    return (target as Developer).skill !== undefined;
}

if(isDeveloper(tony)) {
    console.log(tony.skill)
}else{
    console.log(tony.age)
}