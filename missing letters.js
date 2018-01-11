
function fearNotLetter(input) {
  

var str="abcdefghijklmnopqrstuvwxyz";
var array=str.split("");//turn to array
var firstL=str.indexOf(input[0]);//first lette of input get index on alphabet
var lastL=str.indexOf(input[input.length-1]);//first lette of input get index on alphabet
var fullInput=array.splice(firstL, lastL-firstL);//cut out all leters on alphabet between input fist letter and last//
var m=0;//capture loop time

for(var i=0; i<=fullInput.length; i++){
  if(input[m]!==fullInput[i]){ //compare to find a missing
       return fullInput[i];//return missing
  }
  m=m+1;//increment  per run
if(m==fullInput.length){//check if run is equal array lenth 
   return undefined;
}
 }
}

fearNotLetter("abce");
