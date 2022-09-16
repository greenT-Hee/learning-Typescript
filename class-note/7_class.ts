class Person22 {
    // ts는 꼭 이렇게 위에 선언
    // 접근 범위도 설정 가능:  public, private, readonly
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number) {
        this.name = name; 
        this.age = age;
    }
}

// 리액트 예전 문접 
// class App extends React.Component {
// }

// 리액트 최신 문법 - 훅 기반 함수형 코드 
// function App() {
//     return <div>hello world</div>
// }


// vue
// new Vue ({
//     el: '',
//     setuo() {

//     }
// })