var calc = function(num1,num2,calcType){
    if(calcType=="add")
    {
        return "The sum of two number is: "+(num1+num2);
    }
    else if(calcType=="multiply")
    {
        return "The multiplication of two number is: "+(num1*num2);
    }
};
var c=calc(4,5,"multiply");
console.log(c);