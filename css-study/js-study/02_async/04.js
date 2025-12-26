// 비동기 함수가 없어도, promise 는 가능함


const isSuccess = true;
const myPromise = new Promise((resolve,reject) => {
    console.log("myPromise생성");
    if(isSuccess){
        resolve("성공");
    }else{
        reject("실페");
    }
});

myPromise
.then((result1)=>{
    console.log(result1);
    return result1 + "!";// 다음 then의 response에 담김
    // 내부적으로 promise객체에 return값을 resolve()해준다
})
.then((result2) =>{
    console.log(result2);
    return result2 + "!";
})
.then((result3)=>{
    console.log(result3);
});

const postList = [
    {postId:1,title:"1111",content:"1111"},
    {postId:2,title:"2222",content:"2222"},
    {postId:3,title:"3333",content:"3333"}
]

const fetchPostById = (postId) =>{
    console.log("fetch 실행!");
    
    // 없는 id 먄 [] 빈배열
    // 있는 id 면 [{}] (객체하나)
    const targetPost = postList.filter((post) => post.postId === postId);

    const postPromise = new Promise((rs,rj)=>{
        if(targetPost.length) {// targetPost 가 0이 아니라면(아이디가 있는경우)
            rs(targetPost[0]);
        }else{
            rj(new Error("해당 아이디의 게시글은 존재하지 않습니다."));
        }
    });
    return postPromise;
} 
fetchPostById(5).then((res)=>{
    console.log("데이터 수신 성공");
    const {title , content} = res;
    console.log(`${title},${content}`);
})
.catch((e)=>{
    console.log(e.message);
})