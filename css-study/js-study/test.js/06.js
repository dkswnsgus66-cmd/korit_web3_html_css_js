/*
https://jsonplaceholder.typicode.com/todos/${todoId} fetch하는 함수
(getTodo)

todo id 1,2,3,4,5 인 todo 의 데이터들을 [] 에다가 담아서 출력

*/

const gettodoById = async(todoId) =>{
    let getTodo = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    let todo = await getTodo.json();
    return todo;
}

const todo = await gettodoById(1);
console.log(todo);


let todos = [];
    for(let i=1;i <=5;i++){
        // await은 코드진행을 함수가 완료될때까지 멈춤
        const todo = await gettodoById(i);
        todos = [...todos, todo];
    }
    
console.log(todos);

// 병렬진행을 시켜야 할때
// Promise.all([promise객체1,promise객체2...,promise객체10])
// -> 각 promise 객체들이 병렬로 실행됨

const todoIds = [1,2,3,4,5];

const 투두들 = todoIds.map((id)=>{
    return gettodoById(id);
});
// 병렬실행
todos = await Promise.all(투두들);
console.log(todos.map((todo)=>{
    return todo.title;
}));


