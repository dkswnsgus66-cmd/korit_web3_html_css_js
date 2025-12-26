// https://jsonplaceholder.typicode.com/posts/{id}

const getPostById = (postId) => {
    const postPromise
     = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`) // fetch는 알아서 return을준다
     .then((result)=>{
        //.json() : JSON 문자열을 ->js 객체로 변환 (wevAPI)
        return result.json();
     })

     return postPromise;
}

getPostById(2)
.then((post)=>{
    console.log("데이터 수신성공")
    const {title ,body} = post;
    console.log(`${title},${body}`)
})
.catch((e)=>{
    console.log(e.massege);
});

//https://jsonplaceholder.typicode.com/users/{id}
// fetch -> json을 js 객체화 -> 함수호출 -> 출력창에 username , email만 출력

const getUserById = (userId)=>{
    const userPromise =
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then((result)=>{
    return result.json();
})
return userPromise;
}

getUserById(1)
.then((user)=>{
    console("데이터 수신");
    const {username,email} = user;
    console.log(`username:${username},email:${email}`);
})
.catch((e)=>{
    console.log(e.messege);
})