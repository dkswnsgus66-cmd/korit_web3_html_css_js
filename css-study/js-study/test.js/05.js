let product = {
    product_id:1,
    name:"노트북",
    price:1200000,
    stock:5
}

// spread문법을 사용하여 price10%할인 stiock1감소
// product_id는 제거
let newProduct ={
    ...product,
    price:product.price*0.9,
    stock : product.stock -1
} 
console.log(newProduct);

// rest 문법으로 product_id 필드 제거

const {product_id,...newProductInfo} = newProduct;

console.log(newProductInfo);

const productOption ={
    warrenty: 2,

    
}

// spread 문법을 사용하여 product,productOption 합침 status 추가
const newProduct2 = {
    ...product,
    ...productOption,
status:"배송중"
}

// passwordConform을 서버로 보내지 않는다
// 두객체를 병합
// agreeTerm: trueㅠㅣㄹ드 추가

const basicFormInput ={
    username: "jsman",
    password:"123456",
    passwordConform: "123456",
    email: "jsman@js.com"
}

const optionFormInput ={
    name:"홍길동",
    phone:"010-1111-1111",
    address:"부산시 부산진구"
}

// passwordConform 제거 - rest 문법(비구조 할당)
const {passwordConform,...restInfo} = basicFormInput;

// 두 객체를 병합 + 필드추가
const submitData = {
    ...restInfo,
    ...optionFormInput,
    agreeTerm: true
}
console.log(submitData);

let products=[
    {name:"노트북",price: 120000,stock:1},
    {name:"마우스",price: 30000,stock:0},
    {name:"키보드",price: 80000,stock:10},
    {name:"헤드셋",price: 110000,stock:8}
];
// {name:"스피커",price:40000,stock:0}
// 2.stock제거 
// stock값이 0이면 isAbailable:false, 0이 아니면 isAbailable:true

const products2 =[
    ...products,
    {name:"스피커",price:40000,stock:0} 
]

const product2 =products2.map((p)=>{
    // 비구조 할당+ rest 문법 -> stock을 분리
    // stock = producr.stock
    // pInfo -> stock 제외한 나머지
    // 새로운 객체를 return -> 그 객체에 stock 값을 참조해서 isAvailable추가
    const {stock,...pInfo} = p;
    const isStockOver = stock > 0;
    return {
        ...pInfo,
        isAvailable:isStockOver
    }
    
});
console.log(product2);






