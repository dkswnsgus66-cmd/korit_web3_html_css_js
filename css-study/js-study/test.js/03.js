

// keys() 사용
const following = {
    민수:true,
    철수:false,
    지우:true,
    나연:true
}
const follower = {
    정우:true,민수:true,나연:false
}

// 맞팔 이름 저장 둘다 트루인 것들만 배열에 저장
// 배열.push
const followEachOthers = [];

const entries1 = entries(following)

const entries2 = entries(follower)


for(follow1 of entries1){
    let key1 = entry[0];
    let val1 = entry[1];
    let isfollwer = follower[key2];
    if(val1 && isfollwer){
        follow1.push(key1)
    }
} 
console.log(follow1);

