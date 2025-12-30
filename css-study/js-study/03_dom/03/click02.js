
const board = document.querySelector("#board");
    board.addEventListener("click",(event)=>{
        const target = event.target;
        // js로 태그에 class를 부여하는 방법
        console.log(target.classList);
        

        // js로 태그에 class를 조작하는 방법
        // if(target.classList.contains("click")){
        //     target.classList.remove("click");
        // }else{
        //     target.classList.add("click");
        // }

        // toggle("클래스 이름")
        // "click"이 클래스리스트에 존재하면 제거
        // 존재하지 않으면 추가

        target.classList.toggle("click");

    });