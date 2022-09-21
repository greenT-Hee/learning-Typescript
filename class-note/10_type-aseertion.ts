//타입 단언 
//타스보다 개발자가 앞서 지정 
let aaa;
aaa = '10'
let b = aaa as string; 


// DOM API 조작 
// <div id-"app">hello</div>

let div = document.querySelector('div') as HTMLDivElement;
// if(div) {
    div.innerText 
// }
