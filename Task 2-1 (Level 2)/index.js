let insert = function(num) 
{
document.calculator.textView.value = document.calculator.textView.value + num;
}

let equal = function()
{
let exp = document.calculator.textView.value;
if(exp)
{
document.calculator.textView.value = eval(exp)
}
}

let backspace = function()
{
var exp = document.calculator.textView.value;
document.calculator.textView.value = exp.substring(0, exp.length - 1); 
}

