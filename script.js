//function to call the html 
function checkVotingEligibility(){
//this is to call user name
let nameInput = document.getElementById ('name').value;
 //this is to log the user's age
let ageInput= document.getElementById('age').value; 

//converting any input to a number
let age = Number(ageInput);

//Once the user puts a value it bring up a result
let resultElement = document.getElementById('result');

// writing a function to calculate the age

//if above 40
if (age >=40){
    resultElement.textContent ='Congratulations, You are super eligible to vote!';
}
//if above 18
   else  if (age >=18){
        resultElement.textContent = 'Congratulations You are eligible to vote';
    } 
    //if below 18
    else {
        resultElement.textContent = 'Sorry you are not eligible to vote, try again once you are 18';
    }

    //if user does not put in an age
    if (!ageInput ) {
        resultElement.textContent ='Your Age is required';
    }
    //if user does not put in a valid figure
    else if (isNaN(age) ||age < 0){
        resultElement.textContent ='please enter your age';
        return;
    }
    
}