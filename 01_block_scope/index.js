// ฺBlock Scope (Let/constant)

//การเขียนแบบเดิม
var x = 10
if (x === 10) {
    var y = 500
    console.log("y ใน = " + y)
}
console.log("y นอก = " + y)

// แบบใหม่ 
let x = 10
if (x === 10) {
    let y = 500
    console.log("y ใน = " + y)
}
console.log("y นอก = " + y) // ต้อง error


const x = 50
x = 100 // ต้องไม่ได้
console.log(x)