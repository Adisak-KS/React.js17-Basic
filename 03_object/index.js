// ทำงานกับ Object

// ตัวแแปรเก็บข้อมูล
const username = "Adisak"
const age = 25
const address = "BKK"

// const customer = {
//     customerName: username,
//     age: age,
//     address: address
// }

// const customer = {
//     username,
//     age,
//     address
// }
// console.log(customer)

const customer = {
    username,
    age,
    address,
    showData() {
        console.log("ข้อมูลลูกค้าชื่อว่า = " + username)
    }
}
customer.showData()


