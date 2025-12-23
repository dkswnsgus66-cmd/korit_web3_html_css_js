// 콜백함수를 매개변수로 받는 배열 내장함수들
const people = [
    {
        name: "홍길동",
        age: 20
    },  
      {
        name: "김길동",
        age: 25
    },    
    {
        name: "박길동",
        age: 30
    },    
    {
        name: "오길동",
        age: 35
    }
]

// 1. forEach((배열에서 꺼내온 요소, 인덱스)=>{})
    // forEach(()=>{})
// 반복용, 인덱스는 선언하지 않아도 상관없음.
// 리턴 없음
people.forEach((person,idx)=>{
    console.log(`${idx}번: ${person.name}`)

})


// 2.fileter((배열에서 꺼내온 요소, 인덱스)=>{})
// fileter(()=>{})
// 배열에서 조건에 맞는 요소만 남기고 제거(기존 배열은 유지 새배열은 리턴)
// 리턴이있다 : boolean true만 있음
const adults = people.filter((person)=>{
    return person.age > 20
});
console.log(adults);

// 3. map((배열에서 꺼내온 요소, 인덱스)=>{})
//  map(()=>{})
    // 배열의 각 요소들을 조작
// 리턴으로 여러가지 가능

const peopleWithNim = people.map((person)=>{
    const addNim = {name:person.name+"님",age:person.age};
    return addNim;
})

console.log(peopleWithNim);

//  4. 정렬 sort((pre,next) => {pre-next})
// 원본이 정렬 됨
// 리턴이 존재 리턴의결과가 양수,음수,0 으로 3가지 정렬 pre - next 결과가 양수,음수,0 으로 3가지 정렬
// pre > next -> 양수 : 자리를 바꿈 -> next가 index 앞으로
// pre < next -> 음수 : 자리를 바꾸지 않는다 -> pre 가 index 앞으로
// 0: 자리를 바꾸지 않는다

// 나이순 정렬 오름차순
people.sort((p1,p2)=>{

    return p1.age-p2.age

});
console.log(people);
// 나이순 정렬 내림차순
people.sort((p1,p2)=>{

    return p2.age-p1.age

});
console.log(people);

// findIndex
// IndexOf() -> 데이터 가 정확히 일치 해야 가져온다
// 배열에 객체가 있고, 그 객체의 필드로 index 찾을때
const IndexOfkim = people.findIndex((person)=>{person.name === "김길동"})
console.log(IndexOfkim); // 3

// 누적합을 구해보자
const nums = [2,4,7,100,200]
let sum =0;
nums.forEach((n)=>{ sum += n});
console.log(sum);

// reduce((누적변수, 배열에서 꺼내온 요소, 인덱스))
// reduce((fx, 누적변수 초기값)
    // fx:(누적변수, 배열에서 꺼내온 요소) =>{}

sum = nums.reduce((sum, number)=>{
    console.log(`현재누적값 ${sum}`)
    console.log(`${sum}+${number}연산실행`)
    return sum + number; // sum = sum +number
},0)
console.log(`최종합:${sum}`);

// 왜쓰느냐?
// 서버에서 가져온 데이터를([객체,객체..])를 보기좋게 가공하기 위해 쓴다
const orders = [
    {order_id:1, status:"PAID",price: 10000},
    {order_id:2, status:"CANCEL",price: 5000},
    {order_id:3, status:"PAID",price: 7000}
]
/*
    {
        PAID: 17000,
        CANCEL: 5000
    }
*/
const sumByStatus = orders.reduce((result, order)=>{
    // 처음에는 아무값도 안들어있음
    // {order_id:1, status:"PAID",price: 10000}
    // {order_id:2, status:"CANCEL",price: 5000},
    // {order_id:3, status:"PAID",price: 7000}
        // 최초에는 필드가 없기때문에
    // result[order.status] === undefined
    // (result[order.status]??0) undefined면 0으로 바꿔라
    // +order.price; 더해라
    // result[order.status] === result[PAID] 
    result[order.status] = (result[order.status]??0)+order.price; 
    return result;
},{}); // result의 초기값은 빈 객체{}
console.log(sumByStatus);
