
// ค้นหาข้อมูลใน Array
// indexOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
// find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefind
// findIndex(ข้อมูล) => ผลการคเนหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const colors =["แดง","เขียว","น้ำเงิน", "ม่วง","ขาว"]
console.log(colors)

// const index = colors.indexOf("ขาว")
// console.log(index)

// const search = colors.find(element =>element === "เขียว")
// console.log(search)

const search = colors.findIndex(element =>element === "เขียว")
console.log(search)