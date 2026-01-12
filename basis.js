alert("we are learning external js")


//Variable...

var num = 30;
console.log(num);
document.write(num);

var apple="red";
console.log(apple);
document.write(apple);




//DATA TYPES.....

document.write("we are learning JS"); // string declaration
document.write(12345); // number declaration
boolean= true,false // boolean declaration
test=10>20;
document.write(test);





// ARRAY......

let Apple =["red","brown","blue",50,{name:"fruit"}]
console.log(Apple);


const games ={
    cricket : "sachin",
    tennis:"sania"
}
console.log(games);
console.log(typeof Apple);




//ARITHMETIC OPERATOR......

var a= 60;
var b=30;
console.log("result:", a+b); // addition

console.log("result:",a-b);
console.log("result:",a*b);
console.log("result:",a%b);
console.log("result:",a/b);



//LOGICAL operator.......

var x=10;
var y=500;
var z=200;

//if(x==y && y>z)
if(x==y || y>z){
    console.log("yes is correct");
} else{
    console.log("wrong");
}



//TERNARY OPERATOR.....
  document.write(2+3==5? "yes correct":"no,wrong!");



//CONTROL STATEMENT...

var game="Cricket";
let captain="Rohit Sharma";
const tennis="Sania";

if(game=="Cricket"){
    console.log("Match captain is " ,captain)
}
else if(tennis=="Sania"){
    console.log("correct")
}
else{
    console.log("no match")
}




//SWITCH CASE......

    switch(true){
    case 10>20:
        Answer ="red color";
        break;

    case 20<30:
        Answer="green color";
        break;

    case 50>20:
        Answer="blue color";
        break;

    case 100==200:  
         Answer="black color";
         break;

    default:
        Answer="no";
        break;


}
console.log(Answer);



















