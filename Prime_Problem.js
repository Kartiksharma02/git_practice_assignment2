function checkprime(num){


let count = 0;
for ( let i=1;i<=num;i++)
{
    if(num%i==0){ count++; }
}
count==2?console.log("Yes Prime "): console.log("Not Prime");

}


checkprime(21);