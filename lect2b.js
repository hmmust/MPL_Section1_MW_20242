let students = ['Fathi','Raneem','Shatha'];
let students2 = Array(3);
students2[0]= "Izze";
students2.push("Omar");
students2.pop();
//students2.length=0;
let students3 = students.concat(students2);
students3= students3.concat("Ola");
students3.sort();
console.log(students3.slice(0,2));
console.log(students,students2,students2.length);
console.log(students3,students3.length);

