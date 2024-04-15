// Array Map

// const numbers = [10, 20, 30, 40]
// console.log(`number = ${numbers}`)

// const result = numbers.map(Element => Element * Element)
// console.log(`Array Map = ${result}`);
// [10, 20, 30, 40]
// [10x2, 20x2, 30x2, 40x2]
// [20, 40, 60, 80]
//////////////////////////////////////////////////


const data = [
    {day:"01/06/2566",weather:"แดดร้อน",tem:27},
    {day:"02/06/2566",weather:"ฝนตก",tem:23},
    {day:"03/06/2566",weather:"หมอก",tem:18},
]
const result = data.map(e=>e.weather)

console.log(result)