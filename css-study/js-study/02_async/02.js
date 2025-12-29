// 우리가 작성한 js 코드에 비동기함수(webAPI)가 혼합되어 있으면 
// 이 순서를 어떻게 제어 할수 있을까?

let a = (value)=>{
    console.log("a 호출");
    setTimeout(()=>{
        value += 5;

    },3000);
    return value;
};

let b = (value)=>{
    console.log("b 호출");
    setTimeout(()=>{
        value += 5;

    },1000);
    return value;
};

let c = (value) =>{
    console.log("c 호출")
    setTimeout(()=>{
        console.log(`결과: ${value}`)
    },2000);
};

// let result = a(10);
// result = b(result);
// c(result);
// 동기코드들이 먼저 실행되서 의도대로 코드가 진행되지 못함

// 의도대로 진행하려면?
// 콜백함수
a = (v,callback) =>{
    console.log("a 호출");
    setTimeout(()=>{
        callback(v + 5); // 콜백함수로 데이터가 전달된다.
    },3000)
    // 리턴 x -> 리턴은 함수의 결과인데 그걸 콜백으로 넘겼기 때문
};

b = (v,callback) =>{
    console.log("b호출")
    setTimeout(()=>{
        callback(v+5);

    },1000)
};
c = (v) =>{
    console.log("c호출")
    setTimeout(()=>{
        console.log(`결과: ${v}`)

    },1000)
};


// 비동기와 동기가 혼재되어 있을때 
// 콜백으로 순서를 제어하는 방법
// 안티패턴 -> 콜백지옥
a(10,(valueA)=>{
    b(valueA,(valueB)=>{
        c(valueB);
    });
});

// 콜백지옥의 문제점
// depth 가 깊어지면 가독성이 떨어짐
// 에러처리가 콜백 내부로 강제
// 제어권이 없다(요청의 성공/실패 서버 마음)
// -> 비동기 요청이 끝나고 "~해라" 라는 구조로 변경할수 없을까?
// -> js - "Promise 객체"