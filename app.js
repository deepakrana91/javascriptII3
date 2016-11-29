var i=0,sum=0;

submition();
function submition()
{
while(i<=1000)
{
    sum=sum+i;
    i++;
}
console.log(sum);

sum=0;

for(var j=0;j<=1000;j++)
{
    sum=sum+j;
}
console.log(sum);
}

