var myString = prompt("Put a string");
var lenthString = myString.length;
window.alert(myString + " " + lenthString);

myString = prompt("Put a phrse");
var myString2 = prompt("Put another phrase");


if(myString.length < myString2.length)
{
    window.alert("'" + myString2 + "' phrase was the longest with " + (myString2.length - myString.length) +
    " number of characters");
}
else if(myString.length > myString2.length)
{
    window.alert("'"myString2 + "' phrase was the longest with " + (myString.length - myString2.length) +
    " number of characters");
}
else{
    window.alert("The phrase " + myString + " and the phrase " + myString2 +
    " are equal number of characters");
}