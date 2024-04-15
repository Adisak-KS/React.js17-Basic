// push, pop, shift, unshift
const data =[10,20,30]
console.log(data)

// data.push(500)
// data.push(1000)
// data.push(2000)
data.push(...[500,1000,2000])
// console.log(data)


data.pop()
data.pop()
console.log(data)

data.shift()
data.shift()
console.log(data)

data.unshift(999)
console.log(data)
