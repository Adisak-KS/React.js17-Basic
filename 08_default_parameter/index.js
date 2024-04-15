// Default Paraeter
getDataCustomer = (customerName, customerAddress = "กรุงเทพ") => {
    const address = `ชื่อลูกค้า : ${customerName}
    ที่อยู่ : ${customerAddress}`
    return address
}

console.log(getDataCustomer("อดิศักดิ์", "ระยอง"))
console.log(getDataCustomer("โจ้"))