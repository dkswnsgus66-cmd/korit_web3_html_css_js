// 배열
const arr1 = new Array(1,2,3);// 배열에 1,2,3넣어서 생성
console.log(arr1);

const arr2 = new Array(3);// 길이가 3인 배열 만들기 3자리 만들어줘
console.log(arr2);

// 리터럴 생성방식
const arr3 = [1,2,3,4];
console.log(arr3);

// 자바와 다르게 배열에 자료형이 없기 때문에 
// 무엇이든 담을수 있음.

const hello = () =>{
    return "안녕하세요"
};

const arr4 = [
    "홍길동",11,
    ()=>{
        return "안녕하세요"
    }
];
console.log(arr4[0]); // 홍길동
console.log(arr4[2]()); //arr4[2]는 함수 ()안의()는 함수 리턴값 호출용arr4[2():함수 호출용

// 추가
let fruits = ["사과","오렌지","체리"];
fruits.push("포도"); // 마지막 자리에 추가
console.log(fruits);

// 삭제
// 마지막 인덱스 꺼내옴
const grape = fruits.pop();
console.log(grape); // 꺼내옴 말그대로 마지막을 꺼내와서 프루츠에는 포도가 사라짐
console.log(fruits); // 마지막 idx 사라짐

//spread 문법
fruits = [...fruits,"수박","복숭아"]; // push를 안쓰는 이유
console.log(fruits);

// 배열.splice(시작 인덱스, 제거할갯수)
const sliced = fruits.splice(3,2);
console.log(fruits); 
console.log(sliced); // 잘라오는 개념(배열안에 담아서)

// 배열.splice(시작 인덱스, 제거할갯수, 대신 들어갈 데이터)
// 제거 0 -> 특정인덱스에 추가하는 코드
fruits.splice(1,1,"토마토");
console.log(fruits); // 제거가0이라 한자리씩 밀려남


// 요소 찾기 - find(함수)
// 매개변수로 넘긴 함수결과가 true인 첫번째 요소를 반환
const apple1 = fruits.find((fruit)=> fruit === "사과");
console.log(apple1);

//for 문으로 구현
let apple2 = "";
for(let fruit of fruits){
    if(fruit === "사과"){
        apple2 = fruit;
    }
}
console.log(apple2);

// finf(함수) -> 함수의 return결과가 true이면 가져온다
apple2 = fruits.find((f)=>f.startsWith("사"));
console.log(apple2);

// 요소확인
const hasApple = fruits.includes("사과");
console.log(hasApple); // 사과가 있다

// index 가져오기
const indOfApple = fruits.indexOf("사과");
 console.log(indOfApple); // 0 번에 있다

 // 배열합치기 
 let a = [1,2,3];
 let b = [4,5,6];
 let c = a.concat(b);
 console.log(c);

 //spread
 c = [...a, ...b];
 console.log(c);

 // js 에서 배열 -> 객체(Array 객체)
 // 함수도 객체, 배열도 객체 -> heap메모리에 존재


const refridge = ["우유","치즈","블루베리(상함)","김치","식빵"];

// 블루베리 상함을 빼고,
// 블루베리 추가
// const bluebarry = refridge.splice(2,1,"블루베리");
// console.log(refridge);

// indexOf(데이터) -> 데이터를 못찾으면 ,-1 반환
const idx = refridge.indexOf("블루베리(상함)");
// idx 찾아서 업데이트 이게 더 좋은방법
if(idx !== -1){
    refridge[idx] ="블루베리";
} // 방법2
// refridge[idx] = "블루베리"// 방법1
console.log(refridge);

