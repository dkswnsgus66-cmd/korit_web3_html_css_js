/*
    참고) 클로저 
    - 렉시컬 환경, heap, stack...
*/
const myData = (value) => {
    // JS에서 데이터를 private 하게 저장하는 방법
    let data = value;

    // setter
    const setData = (input) => {
        data = input;
    }

    // getter
    const getData = () => {
        return data;
    }

    return [getData,setData,data];
}
// getName은 함수 -> myData함수 내부 name변수를 참조 하고있음
// 즉 함수에서 만들어진 return data set함수에서 다른 데이터를 넣으면 바뀌고 data를 참조하는 name은 값이 고정된다
// name이 저장하는 데이터는 함수에서 리턴한 값을 복사해서 가져옴
// set get을 이용해 private를 저장한다 
const [getName,setName,name] = myData("홍길동");
console.log(name);
console.log(getName());

setName("김길동");
myData("홍길동");
console.log(name); // 복사해서 가져왔기때문에 고정값
console.log(getName());
