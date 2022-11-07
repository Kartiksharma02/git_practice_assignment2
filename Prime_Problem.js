function checkprime(num){
var count_factor=0;
   for(let i=1; i<num.length-1; i++){
     if(num%2==0){
   return true;
  }
}
return false;
}
checkprime(21);