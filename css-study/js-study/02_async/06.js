// Promise 를 문법으로 감출수 있다
// async / await 문법


const delay = (ms) =>{
    const myPromise = new Promise((rs,rj)=>{
        setTimeout(()=>{
            const s = ms / 1000;
            rs(`${s}초가 경과되었습니다.`)
        },ms); 
    });
    return myPromise;
};

// const start = () =>{
//     delay(3000).then((res)=>{
//         console.log(res);
//     })
// };

// async 를 붙이면 함수가 promise 객체를 반환하게 됨
const start = async () =>{
    // delay는 비동기 함수(promise 반환 )원래는 delay.then으로 써야함
    // 동기처럼 쓰고싶음
    // awailt은 promise 객체의 상태가 fullfill 이 될때까지
    // 해당함수의 코드진행을 대기시킴 -> then()과 동일
   try{ 
    let result = await delay(3000);
    console.log(result);
   }
   catch(error){
    // error는 reject() 에 담은 데이터
    console.log(error);
   }
}

start();
// getUserById -async / await 으로 변환
const getUserById = async(userId)=>{
    // fetch는 비동기 -> webAPI
    let response =
    await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    // json();는 비동기 -> webAPI
    let user = await response.json();
    const userInfo = {
        username:user.username,
        email:user.email
    };
    return userInfo; // userInfo가 Promise 안에 resolve됨
};
// getUserById(1) 작업이 끝나고 , await을 써서 
// resolve로 set했던 데이터를 받아 볼수 있다.
const user = await getUserById(1);
console.log(user);