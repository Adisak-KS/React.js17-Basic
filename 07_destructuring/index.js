// Destructuring

// Array

// const colors = ["เขียว","แดง","เหลือง"]
// const green = colors[0]
// const red = colors[1]
// const yellow= colors[2]

// console.log(green)
// console.log(red)
// console.log(yellow)
/////////////////////////////////////

// const colors = ["เขียว","แดง","เหลือง"]
// const [green ,red,yellow] = colors

// console.log(green)
// console.log(red)
// console.log(yellow)
/////////////////////////////////////

// const colors = ["เขียว","แดง","เหลือง"]
// const [green,,yellow] = colors

// console.log(green)
// console.log(yellow)
/////////////////////////////////////

// object
const product = {
    productName:"คอมพิวเตอร์",
    price:30000,
    stock:10
}

// const productname = product.productName
// const price = product.price
// const stock = product.stock

const {"productName":n,"price":p,stock:s} = product

console.log(n)
console.log(p)
console.log(s)
