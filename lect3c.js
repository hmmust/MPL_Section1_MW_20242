students = [ { fullname:"Mohannad AlOraifi",
                age: 23,courses:['MPL','ALGO']
                },{ fullname:"Yousef Murad",
                    age: 24,courses:['MPL','AI']
                }
            ];
students.push({fullname:"Zain Shadi", age:21,
                courses:['MPL','ALO']});
for(let s of students)
    console.log(s);
console.table(students);
console.log(students[1].fullname);
