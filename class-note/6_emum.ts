// enum: 열거 
// 숫자나 문자로 값을 할당하지 않으면 0부터 차례대로 숫자가 출력된다.
enum Shoes {
    Nike = '나이키', 
    Adidas = '아디다스'
}

let myShoes = Shoes.Nike
console.log(myShoes) //'나이키'


// 이넘 예제
enum Answer {
    Yes = 'Y', 
    No = 'N'
}

function askQuestion(answer : Answer) {
    if(answer === Answer.Yes) {
        console.log('정답')

    }
    if(answer === Answer.No){
        console.log('오답')
    }
}
 askQuestion(Answer.Yes);
//  askQuestion("Yes");
