// 조건문 - 자바랑 동일
const age = 22;
if(age>18){
    console.log("성인");
}
const score = 82;
if(score >90){
    console.log("A");

}elseif(score>=80)
{
    console.log("B")
}elseif(score>=70)
{
    console.log("C");
}
// else{
//     console.log("F");
// }

// 반복문

for (let i = 1; i<=10; i++ ){

    console.log(i);
}

while(i < 5){
    console.log(i);
    i++
}
// 배열 (리스트) + for

const nums = [10, 20, 30];

//전통적 for문
for(let i =0; i<nums.length;i++){
    console.log(nums[i]);
    // nums[0], ...nums[2]
}

// 항상 for문
for(let n of nums){
    // nums에 있는거 하나씩 n이라는 변수에 담아서 반복
    console.log(n);
}
