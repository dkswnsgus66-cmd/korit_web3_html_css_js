// 자바스크립트 객체 - 클래스
class User{
    constructor(name,age){
        // constructor 함수가 알아서
        // 메모리 공간 만들고, name , age 멤버변수 매핑
        this.name = name;
        this.age = age;
    }
    hello(){
        console.log(`안녕하세요 저는 ${this.name}이고 }`, `${this.a}살 입니다`);
    }

}
let user = new User("홍길동",20);
console.log(user.name,user.age); // 좋뢰
user.name = "김길동"; // 업데이트 가능
user["age"] = 30; // 필드 변수가 key 처럼 다루어 진다
console.log(user["name"],user.age);

user.hello();

// 여러개의 인스턴스가 필요한 경우 => class 
// 단순히 데이터를 묶겠다 -> 리터럴(자주 사용);

// 리터럴 방식 Map.of, List.of
user = {
    name: "홍길동",
    age : 20,
    hello: function(){
        console.log(`하이요 저는 ${this.name}이고`,`${this.age}살 입니다.`);
    }
}

// 객체에 없던 필드 추가가능
user.address1 = "부산시";
user["adress2"] = "부산진구";
console.log(user);

// name, age , color -> "문자열"과 동일취급
const dog = {
    name:"멍멍이",
    age : 5,
    color : "검은색"};

    const key = "name"
    // 변수에 담긴 값을 key로 쓰려면?
    // username: "6자 이상~"
    const cat = {
        // 변수에 담긴 값을 쓰려면 []로 감싸줘야 한다
        [key] : "야옹이",
        age : 5,
        color : "검은색"
    }
    console.log(cat);

// key 들을 [] 안에 넣어서 리턴
const keys = Object.keys(cat);
console.log(keys);
//value들을 [] 안에 넣어서 리턴
const vals = Object.values(cat);
console.log(vals);
// [key,value]를 [] 안에 넣어서 리턴 배열 안에 배열을 넣는다
const entries = Object.entries(cat);
console.log(entries);

for (let entry of entries){
    console.log(`key: ${entry[0]},val:${entry[1]}`);
}

// 비구조 할당
for(let [key,value]of entries){
    console.log(`key${key},val:${value}`);
}