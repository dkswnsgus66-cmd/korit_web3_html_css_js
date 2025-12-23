const id = "user1"
const pw = "password123"

// 최종함수의 호출을 보고 아래의 함수를 완성 하세요

// 1. id, pw 입력감지 -> 검증 -> 저장
 const submit = ()=>{
    console.log("폼 제출")
    cb({
        id:id,
        pw:pw
    });
 }

 const validate =(data,cb) =>{
    console.log("검증")
    const isValid = data.id.length >= 4 && data.pw.length >= 8;
    cb(isValid,data);
 }
 
 const save = (isValid, data) => {
    console.log(isValid ? `${data}저장 성공`:"검증실패");
 }
 

submit((data)=>{
validate(data,(isValid, data)=>{
    save(isValid,data);
})

});

