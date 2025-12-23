/**
 * 자바스크립트는 원래 브라우저 환경에서 실행되는 언어
 * ->node.js 를 설치하면 브라우저 없는 환경에서 실행가능
 * 
 * vsCode에서 자바 스크립트 js 코드실행 가능하게 
 * -> 플러그인 code runner
 * 
 * 자바스크립트는 인터프리터 언어(컴파일 x)
 * 한줄 한줄 읽어서 바로 실행
 * -> 오류를 실행중에 발견
 */ 
// 콘솔출력
console.log("hello java script");

// 자바스크립트의 변수(let.const.var)
// 재할당 할수있는 변수는 let으로 선언
// 변수선언시 자료형이 없다
// 해당 코드를 해석할때 데이터를 보고 변수에 자료형이 부여된다
// 자바스크립트는 저장하고 출력을 해야한다.
let name = "홍길동";
console.log(name);
name = "김길동";
console.log(name);
name = 1;// 자료형이 다른 데이터도 재대입 가능
console.log(name);

// 상수 -> 재할당 안됨
const address = "부산시";
console.log(address);
// address = "울산시" // 에러발생 -상수-> 재대입 x

// var -> 변수 호이스트 때문에 복잡도 증가
// 권장) -> 사용하지 말자
var number = 10;
number =20;

