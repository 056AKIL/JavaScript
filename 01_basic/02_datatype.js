"use strict" // treat all JavaScript code as newer version

let fullName = "Akil" 
let age = 18      
let isFollow = false 
let rollNumber      
let sex = null      // null
// -----premetive-----
// number => 2 to the power 53
// string => ""
// boolean => true / false
// Bigint => 
// Symbol for Uniqueness
// Undefined =>
// null => standalone value

// ---- Non premetive datatype ----
// object
const student = {
    fName : "Ashish",
    roll :"1234" 
}

console.table([fullName, rollNumber, age, isFollow, sex, student.fName, student["roll"]])