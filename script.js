
// SCRIPT FACTORIAL NUMBER

function fact(num)   {  
    
    if (num == 0) {  
        return 1;  
    }  
    
    else {  
        return num * fact( num - 1 );  
    }  
    }

function fact1()  {

    var num = document.getElementById("number").value;  
    var f = fact(num);  
    document.getElementById("res").innerHTML="The factorial of the number " + num + " is: " + f ;  
    }  

// SCRIPT UNIQUE CHARACTERS

function uniqueCharacters(str)
{
     
    // If at any time we encounter 2
    // same characters, return false
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
 
    // If no duplicate characters
    // encountered, return true
    return true;
}

function unique1() {
var str = document.getElementById("is-unique").value;

if (uniqueCharacters(str) == true)
    document.getElementById("result").innerHTML= str +
                   " has all unique characters" ;
else
    document.getElementById("result").innerHTML= str +
                   " has duplicate characters";
}

// CHECK IF THE STRING IS PALINDROME

    function validatePalin(str) {  
  
    // get the total length of the words  
    const len = string.length;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len / 2; i++) {  
  
        // validate the first and last characters are same  
        if (string[i] !== string[len - 1 - i]) {  
            document.getElementById("pali").innerHTML="The string " + str + " is not a palindrome." ;  
        }  
    }  
    document.getElementById("pali").innerHTML="The string " + str + " is a palindrome." ;   
    }  
    