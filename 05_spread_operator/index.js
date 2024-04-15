// Spread Operator

const newArr = [100, 200, 300]
const data = [10, 20, ...newArr]
console.log(data)

const colors = ["เขียว", "น้ำเงิน", "ขาว"]
const allColors = ["แดง", "เหลือง", ...colors]
const newColors = ["ดำ", "เทา"]

allColors.push(...newColors)
console.log(allColors)