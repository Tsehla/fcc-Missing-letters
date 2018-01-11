
function fearNotLetter(input) {
  
var str="abcdefghijklmnopqrstuvwxyz";
var array=str.split("");
var firstL=str.indexOf(input[0]);
var lastL=str.indexOf(input[input.length-1]);
var fullInput=array.splice(firstL, lastL-firstL);
var m=0;

for(var i=0; i<=fullInput.length; i++){
  if(input[m]!==fullInput[i]){
       return fullInput[i];
  }
  m=m+1;

if(m==fullInput.length){
   return undefined;
}
 }
}

fearNotLetter("abce");
