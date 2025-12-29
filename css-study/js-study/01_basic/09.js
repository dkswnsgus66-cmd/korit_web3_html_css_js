let colors = ["빨강","파랑","노랑"];

const c0 = colors[0];
const c1 = colors[1];
const c2 = colors[2];
console.log(c0,c1,c2);

// 편하게 인덱스를 꺼내는 방법
// 구조분해 할당,또는 비구조 할당 이라고 부름
let [color1,_,color3] = colors;// 파랑만 가져오고 싶지 않을때
console.log(color1,color3); 

// 값 스왑
let a = 10; // 10 -> 20
let b = 20; // 20 -> 10
let temp = 0; // 0 -> 10
temp = a; 
b = b;
a = b;
b = temp;

console.log(a,b); // 20 , 10
// 구조분해 할당은 등호기준으로
// 좌우 a, b 는 각각 다른 a,b다
// 우변이 과거의 a,b값을 기억하고있다. 사실 좌측도 과거값 기억
[a,b] = [b,a];
console.log(a,b);

// 객체 구조분해 할당
let post = {

    post_id :1,
    title:"상품구매안내",
    view:120,
    auther:"운영자"

}

let post_title = post.title;
let post_auther = post.auther;
// 객체 구조분해 할당
// key 를 똑같이 맞춰주면 가져올수 있다
let {title,auther} = post; // 우측 객체에서 key의 요소들을 가져옴
console.log(title,auther);

// 구조분해 할당은 대입 상황에서 동작한다
// 구조분해를 쓸때 {},[] 같이 해당 구조의 속성도 표시한다
// 1. 대입연산자
// 2. 함수 매개변수
// 3. for
const fx=({title,auther})=>{
    console.log(`${auther}:${title}`);
}
// let {title,auther} = post;
fx(post);

// title = post.title, auther = post.auther
// fx(post.title,post.auther)

// [[key1,val1],[key2,val2],[key3,val3]...[key,val]]
let entries = Object.entries(post);
// entry = [key,val]
for( let [key,val] of entries){
    console.log(`${key},${val}`);
}

// REST(나머지) 문법 - 배열, 객체

// 배열
colors = ["빨강","파랑","노랑","초록","검정"];

// 앞의값 일부만 가져오자 , 나머지는 배열로 가져오자
const [red,blue,...rest] = colors; // 빨강 파랑은 구조 분해로 가져오고 나머지 rest는 배열형태로 가져온다
console.log(rest);

// 객체
post = {

    post_id :1,
    title:"상품구매안내",
    view:120,
    auther:"운영자"

}
// post_id만 빼고 , postInfo 객체로 대입
const {post_id,view,... postInfo} = post;

console.log(postInfo);

// SPREAD 문법 - 배열, 객체
const colors1 = ["빨강","파랑","초록"];
// 분홍,노랑 추가하고 싶다.
const newColor1 = [...colors1,"분홍","노랑"];
console.log(newColor1);

// 배열끼리 합치기
const colors2 = ["분홍","노랑","검정"];
const newColor2 = [...colors1,...colors2];
console.log(newColor2);


const product1 = {
    product_id :1,
    name:"모니터",
    price: 200000,
    option:{
        color:"블랙",
        year:2022
    }
};

const newProduct = {
    ...product1,
    stock : 10, // 새로운 필드 -> 정보추가
    price: 150000 // 기존필드 중복 -> 업데이트
}
console.log(newProduct);

// 얕은복사 문제점
// js에서 SPREAD 사용시 1단계까지만 깊은복사
// 2단계부터는 참조값만 복사(얕은복사)
newProduct.option.color="실버";// 2단계부터는 얕은복사라서 실버로 변경됨
product1.price = 100000; // 1단계는 깊은복사라서 변경되지 않는다
console.log(product1); 
console.log(newProduct);// newProduct의 price는 변경이 안됨(깊은복사)

