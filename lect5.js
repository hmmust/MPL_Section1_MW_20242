const {checkAge,averageAge} 
= require('./lect4d.js');

checkAge(20).then((value)=>{
    return 2025-value;
}).then((birthyear)=>{
 console.log(birthyear);
    
}).catch((value)=>{
    console.log(value);
});







