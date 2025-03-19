//exports.checkAge= async (age)=>{ // promise
const checkAge= async (age)=>{ // promise
  if(age >=18)
    return age;
  else
  return Promise.reject("Invalid Age");
}

exports.checkAge= checkAge;
exports.averageAge= 25;
//module.exports = checkAge;
//module.exports = {checkAge};










