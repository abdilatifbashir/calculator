
var add=function(num1,num2){
	return num1+num2;
};
var subtract=function(num1,num2){
	return num1-num2;
};
var multiply=function(num1,num2){
	return num1*num2;
};
var divide=function(num1,num2){
	return num1/num2;
};
var num1=parseInt(prompt("enter first number"));
var num2=parseInt(prompt("enter second number"));
var result=add(num1,num2);
var result1=subtract(num1,num2);
var result2=multiply(num1,num2);
var result3=divide(num1,num2);

alert("the sum of two numbers is: "+result);
alert("the subtraction of two numbers is: "+result1);
alert("the multiplication of two numbers is: "+result2);
alert("the division of two numbers is: "+result3);
alert("cheers...you have done");



