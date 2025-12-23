const products = [
    {name:"노트북",price: 120000},
    {name:"마우스",price: 30000},
    {name:"키보드",price: 80000},
    {name:"무선헤드셋",price: 110000},
    {name:"스피커",price: 40000}
]
// 1. products에 담긴 객체들,원본유지 name: "상품이름(할인)",price는 10% 할인가격 업데이트
// 2. 5만원 이하 상품들만 10%할인 업데이트
const 상품들 = products.reduce((result, product)=>{
    const update = {
        name: product.name + "(할인)",
        price: product.price * 0.9
    }
    result.push(update);
    return result;
},[]) // 초기값 빈배열

console.log(상품들);

const 상품할인 = products.reduce((result,product)=>{
    
    if(product.price <= 50000){
        const defile = {
            name: product.name,
            price: product.price*0.9
        }
        result.push(defile);
    }
   return result;
},[])
console.log(상품할인);

const discount = products.filter((product)=>product.price<=50000).map((product)=>{
    return{
        name:product.name,
        price:product.price*0.9
    }
});
console.log(discount)

const discount2 = products.reduce((result,product)=>{
    if(product.price <= 50000){
        const die = {
            name:product.name,
            price:product.price*0.9
        }
        result.push(die);
    }
    return result;
},[]);
console.log(discount2);

const cart = [
     {name:"노트북",price: 120000,count:1,cheaked:true},
    {name:"마우스",price: 30000,count:1,cheaked:false},
    {name:"키보드",price: 80000,count:2,cheaked:true}
]
// 최종 결제금액
// cheaked 가 true인 상품들의 총 가격을 구해라
let sum = 0;
const car = cart.reduce((sum,product)=>{
    if(product.cheaked == true){
        
       const sume = product.price*product.count;
       sum += sume
    }
    return sum;
},0);
console.log(car);