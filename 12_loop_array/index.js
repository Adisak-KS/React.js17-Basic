// การ Loop Array
// For Loop, ForEach, ForOf

const data = [10,20,30,40,50]

// for(let i = 0; i<data.length;i++){
//     if (data[i] > 30)break
//     console.log(`ลำดับที่ ${i} = ${data[i]}`)
// }

// data.forEach(Element =>{
//     if(Element >= 30){
//         console.log("Hello")
//     }
//     console.log(`สมาชิกใน Array Data = ${Element}`);
// })

for(const element of data){
    if (element > 30)break;
    console.log(`สมาชิกใน Array Data = ${element}`);
}