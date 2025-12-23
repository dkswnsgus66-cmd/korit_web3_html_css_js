// 자바스크립트 원시타입(원시자료형) / 객체(참조타입)
// stack, heap 

// 원시타입
// 1. 숫자(number) 넘버로 숫자 다 통일
const num1 = 10;
const num2 = 10.111;
console.log(typeof num1);
console.log(typeof num2);

// number자료형의 독특한 값
const num3 = 100 / 0; // 무한대
console.log(num3);
console.log(typeof num3);

// NaN(Not a Number)
// 정의되지 않는 사칙연산
const num4 = "홍길동" /3;
console.log(num4);
console.log(typeof num4);

//  2. 문자열(string)
const name = "홍길동";
console.log(typeof name);

const hello = `안녕하세요 제 이름은 ${name} 입니다`;

// 사용자가 input에 입력한 데이터 string!
// input type= "number" /> -> js로 들고오면 string


console.log(hello);

// 3. boolean - truthy / falsy(나중에)
const isCliked = false;

// 4. null: 존재하지 않는다, 알 수 없는 값
const a = null;
console.log(typeof a); // object -> 버그

// null 비교는 이렇게 해줘야 한다
console.log(a === null);

// 5. undefined: 변수에 값이 할당되지 않은 상태 자바에서는 숫자는 0 스트링 자료형에선 null 이지만 여기선 undefined
let b;
console.log(b);
console.log(typeof b);

// 형변환 - 자동 / 명시

let number1 = "15";
let number2 = 5;

// 문자열이 덧셈을 제외하고 사칙연산이 있으면 
// 숫자로 자동 형변환
// 이걸 응용하기 보다는 디버그 할때 참고하자
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 - number2);
console.log(number1 + number2); // 덧셈을 안됨

// 뎃셈은 명시적으로 형변환 해줘야 한다
console.log(typeof number1); // string
number1 = parseInt(number1); // int 형변환
console.log(typeof number1); // number


