//함수의 파라미터에 타입을 정의하는 방식
// function add(a: number, b: number) {
//   return a + b;
// }

// add(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
// function sum(): number {
//   return 10;
// }

// 함수의 타입을 정의하는 방식 정리 (이게 가장 기본)
function sum(a: number, b: number): number {
  return a + b;
}

// sum(10, 20);
// JS와 달리 바로 오류 알려줌 (조금 더 엄격함)
// sum(10, 20, 30, 40); 불필요한 인자들

// 함수의 옵셔널 파라미터
// ?: 필요에 따라 인자를 생략도 가능함
function log(a: string, b?: string) {}

log("hello world");
// 두번째 인자 생략했음에도 오류 X
