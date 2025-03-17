function sum_numbers(a , b=2 ){
    return a+b;
}
function sum_numbers2(...a ){
    let total =0;
    for(e of a) total+= e;
    return total;
}
console.log(sum_numbers(10,15));
console.log(sum_numbers2(10,20,16,21));



