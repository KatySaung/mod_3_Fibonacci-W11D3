const express = require('express');
const app = express( );

// Correct List of Fibonnaci Numbers [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377]
// Fibonnaci first term = 0
// Fibonnaci second term= 1 
// Fibonnaci third term = sum of first term and second term
function fibNum(num){
    let n1= 0;
    let n2 = 1;
    let n3 = 0;

/*fibonnaci logic: n=a whole number with 0 as the first term and each term is calculated by Fn-1, Fn-2, Fn=Fn-1+Fn-2 (for n>1) to find the fibonnaci number. Ex: To find the fibonnaci number for the 3rd term, will use 2 for n=2 and Fn=1 */
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
app.get('/fibonacci/:num', (req, res) =>{
    if (fibNum(Number(req.params.num))){
        res.send("Very well, This is fibonnaci.")
    }else{
        res.send("I can tell, this is not fibonacci.")
    }
});
app.listen(3000, ( ) =>{
    console.log("The listening on port:3000")
})

