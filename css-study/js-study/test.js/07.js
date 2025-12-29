// async / await

 const getTodosByUserId = async (userId) => {
    const url = `https://jsonplaceholder.typicode.com/todos`
    // 200개의 todo들을 받아와서 [js 객체들]로 바꿔줘라
    // 매개변수로 들어온 userId로 필터링
    // 각 객체에 리턴으로 title,completed 필드만 남기고 제거
    // 제거된 [js객체들]을 return

    let todos = await fetch(url);
    todos = await todos.json;
    console.log(todos.length); // 200
    // [todo, todo, todo....todo]
    // {
    //      userId : 1
    // }

    return todos;
    const filteredTodos = todos.filter((todo)=>{
        return todo.userId === targetId;
    })

    console.log(filteredTodos.length);
 }

 // 각 객체에 리턴으로 title,completed 필드만 남기고 제거
//  const mappedTodos = filteredTodos.map((todo)=>{
//     const {title,completed} = todo;
//     return {
//         title : title,
//         completed: completed
//     }
     // 제거된 [js객체들]을 return
    // return mappedTodos;
    return todos.filter((todo)=>todo.userId === targetId).map((todo)=>{
        return{
            title:todo.title,
            completed:todo.completed
        }
    });
//  })
    
     const todos = await getTodosByUserId(1);
     console.log(todos);