const mohannad = {
    fullname:"Mohannad AlOraifi",
    age: 23,
    spec: 'SE',
    courses:['MPL','ALGO']
};
for(let a in mohannad)
    console.log(a,mohannad[a]);
mohannad.age=23.5;
console.log(mohannad);
console.log(mohannad.fullname);
console.log(mohannad['fullname']);
