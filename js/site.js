//get the string from the page
//controller function
function getValue(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let returnObj = checkForPal(userString);

    displayMessage(returnObj);
    
}


// reverse the string
//logic function
function checkForPal(userString){

    //taco cat
    userString = userString.toLowerCase();

    //remove spaces and special chars
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    let revString = [];
    let returnObj = {};

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
        
    }
    
    if (revString == userString) {
        returnObj.msg = "Well Done! You have entered a palindrome!"
    }
    else{
        returnObj.msg = "Sorry! You have not entered a palindrome!"
    }

    returnObj.reversed = revString;
    return returnObj;

}
//display the reversed string to the user
//view function
function displayMessage(returnObj){

    //write to the page
    document.getElementById("alertHeader").innerHTML = returnObj.msg; 
    document.getElementById("msg").innerHTML = `Your Phrase reversed is: ${returnObj.reversed}`;   
       
    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}