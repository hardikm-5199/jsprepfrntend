/*
-> javascript is interpreted language but it is not entirely true. The javascript engine actually compiles 
program on the fly and then immediately runs the compiled code
-> console.log(b).. log(b) is function call and console is object reference where log() function is located.
->object property access -- objects are values that hold other values at specific named locations 
called properties. 
-> Values that are included directly in the source code are called "Literals".
-> "Coericon" -> meaning to convert the value from type nummber to string 
-> if someone enters a series of a numeric characters into a form on an ecom page, thats a string, but if you need to 
then use that value to do math ops, you need to "COERCE" it to a number.
-> 2 kind of coericon happens in js--explicit and implicit..explicit happens with Number() which is built in
js function. where implicit function can be explained with below ex:
when comparing "99.99" and 99.99 we think they are the same. arent they? it is same value with in two different
representations. to help you out in these common situations. javascript will sometimes kick in and implicitly
coerece values to the matching types.
so if you use "99.99"==99.99 loose equals operator it will convert string to its number equivalent and compare it
which makes this condition true.  
*/