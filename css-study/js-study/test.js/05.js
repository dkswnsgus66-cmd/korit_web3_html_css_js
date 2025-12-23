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

// spread 문법을 사용하여 
const newProduct2 = {
    ...product,
    ...productOption,
status:"배송중"
}