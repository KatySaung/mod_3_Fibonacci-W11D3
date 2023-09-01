const express = require('express');
const app = express( );

// Correct Fibonnaci Numbers [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377]
// Fibonnaci(0) = 0
// Fibonnaci(1) = 1
// result= result-2+result-1 where result>=2
function fibNum(num){
    let n1= 0;
    let n2 = 1;
    let n3 = 0;

/*fibonnaci logic: if given number[21,34,55] with n1(first number)= 21, n2(second number)=34, and n3(third number)=55 
 let 55< num, let third number = first number+second number( 55=21+34), let first number =second number( 21=34 ) and let second number=third number and (34=55)*/
    while (n3 < num){
        n3 = n1 + n2
        n1 = n2
        n2 = n3
   
   }
   return n3 === num;
}

// created route and tested fibonnaci function
app.get('/ ',(req, res) => {
    res.send(`<h1>Fibonnaci Tester</h1>`)
    console.log(fibNum(55), req.params.num)
});
//convert result from string to Number
app.get('/fibonacci/:num', function(req, res) {
    if (fibNum(Number(req.params.num))){
        res.send("Very well, This is fibonnaci.")
    }else{
        res.send("I can tell, this is not fibonacci.")
    }
});
app.listen(3000, ( ) =>{
    console.log("The listening on port:3000")
})

