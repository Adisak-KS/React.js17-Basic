// Array Filter

// const data = [10,20,30,40]

// const result = data.filter(e=>{
//     return e>20
// })

// console.log(result)

const data = [
    { name: "ก้อง", salary: 25000, department: "โปรแกรมเมอร์" },
    { name: "โจโจ้", salary: 30000, department: "การตลาด" },
    { name: "โม", salary: 10000, department: "ฝึกงาน" },
    { name: "แมว", salary: 50000, department: "การตลาด" },
    { name: "นก", salary: 10000, department: "ฝึกงาน" },
]

const result = data.filter(e => e.salary > 10000).filter(e => e.department === "การตลาด")

console.log(result)