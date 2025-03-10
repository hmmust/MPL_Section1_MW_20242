let students = ['Fathi','Raneem','Shatha'];
let students2 = Array(3);
students2[0]= "Izze";
students2 = ['Majd',...students2,'Omar'];
let students3 = [...students,...students];
console.log(students2,students3.length);
console.log(students3.indexOf("Fathi2"));
