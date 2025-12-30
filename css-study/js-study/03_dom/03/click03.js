 const answer = 7;
    // 7번 div를 누르면 배경이 초록색으로 변하면서 텍스트가 정답으로 변경
    // 나머지를 누르면 빨간색으로 변하면서 텍스트가 땡으로 변경

    const borad = document.querySelector("#board");
    // 부모인 board가 cell 로부터 이밴트를 전달받아서 작동
    borad.addEventListener("click",(event)=>{
        const target = event.target;
        const id = target.id;
        let number = target.innerText;
        number = parseInt(number);
        // number = Number(number);


        console.log(`id:${id},num:${number}`);
        if(number === answer){
            target.innerText ="정답!";
            target.classList.add("answer");
            }else{
                target.innerText = "땡!";
                target.classList.add("wrong");
            }
        }
        
    );