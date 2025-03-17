const printhash= ()=>{console.log("###############")};
function sum_numbers(a , b=2,cb ){
    cb();
    console.log(a+b);
    cb();
}
sum_numbers(10,15,printhash);
sum_numbers(15,15, ()=>{console.log("-----------")});
sum_numbers(15,15, ()=>{
    console.log("~~~~~~~~~~~~")
});




