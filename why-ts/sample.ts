function sum1(a: number, b: number) {
  return a + b;
}

// 숫자가 아니면 error가 미리 뜸
// sum1(19, "20");
// sum1(19, 20);

// number에서 사용하는 것들만 자동 완성해줌
let result = sum1(10, 20);
result.toLocaleString();
