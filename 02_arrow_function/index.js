// Arrow Function

// Old
function fullname(fname, lname) {
    return fname + lname
}
console.log(fullname("Adisak", "Khongsuk"))


// New
fullname = (fname, lname) => fname + lname;
console.log(fullname("ABC", "DEF"))


setAge =(age)=>"อายุ = "+age
console.log(setAge(20))