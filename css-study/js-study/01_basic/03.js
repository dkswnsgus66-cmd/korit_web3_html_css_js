// 연산자
// 사칙연산자, 대입연산자 , 삼항연산자 .. 자바와 동일

// 비교연산자
let num1 =10;
let num2 ="10";

// 주의 : == -> 사람이 예상하지 못하는 결과가 나옴
// 쓰지마라
console.log(num1==num2);
console.log(0 == false);

// 비교표준
console.log(num1 === num2);
console.log(num1 !== num2);

// null 병합 연산자
// A ?? B -> A null 혹은 undefined라면 B를 반환 아니면 A 반환 (옵셔널개념 

let a; // undefined
let b = 10;
console.log(a ?? 10);//10
console.log(b ?? 20); //10
console.log(b ?? 10);

 // 옵셔널 체이닝(연산자 x )
//  js 객체
let UserInfo = {
    profile:{
        name:"길동이"
    }
}
let name = UserInfo.profile.name;
console.log(name);

UserInfo = {};
//  undefined에 .으로 참조해서 에러발생

// UserInfo안에 profile이 있으면 참조, 없으면 undifined 반환
// profile안에 name이 있으면 참조, 없으면 undifined 반환

 name = UserInfo?.profile?.name ?? "익명";
 console.log(name);

//  삼항 연산자는 따로 존재한다
const age = 30;
const isAdult = age > 20 ? true : false;

/**
 * role === "ADMIN"
 * ?<ADMIN />
 * :<USER />
 */

// truthy / falsy
// 자바스크립트의 모든 값은 boolean으로 변환이 가능
// 조건문 뒤에 바로 값을 사용할수 있음.
// -> 변환된 결과가 true -> truthy값
// 변환된 결과가 false -> flasy 값
// false, 0, -0, "", null, undifined, NaN -> boolean 자동 변환하면 falsy(그냥 false를 이렇게 부른다)

// !! -> 값을 boolean 타입으로 바꾸는법
console.log(!!0, !!"", !!null, !!undefined, !!NaN);
// 헷갈리는 truthy 들 "0" 은 문자이다 빈 리스트도 true이다
console.log(!![], !!"0", !!"false");

if([]){
    console.log("실행됨")
}

// 논리연산자
// 모든값은 boolean 가능

// A 를 실행하고, 결과가 truthy면 ,B를 실행한다
// A && B

const isLogin = true;
// 간단한 if 문 처럼 사용
isLogin && console.log("로그인 상태입니다.");
!isLogin && console.log("로그아웃 상태 입니다.");

// A || B 
// 기본값
let page;
page = page || 1; //  || ?? 랑 같다 page가 값이 없으면 1출력
console.log(page);
