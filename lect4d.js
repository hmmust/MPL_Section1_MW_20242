const checkAge= async (age)=>{ // promise
  if(age >=18)
    return age;
  else
    return Promise.reject("Invalid Age");
}
checkAge(20).then((value)=>{
    return 2025-value;
}).then((birthyear)=>{

    
}).catch((value)=>{
    console.log(value);
});







