// Rest Parameter
// summation=(x,y)=>{
//     return x+y
// }

// summation=(x,y,z)=>{
//     return x+y+z
// }

summation = (...numberArr) => {
    let total = 0
    for (let number of numberArr) total += number // 0+112+500
    return total
}


console.log(summation(5, 12))
console.log(summation(50, 112, 500))
console.log(summation(50, 112, 500 + 42555))
