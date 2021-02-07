//Initial variables
const successNotification=document.getElementById('match');
const errorNotification=document.getElementById('notMatch');

const keypadNumber=document.querySelector('.numbers');
let userInput= document.getElementById('userInputDisplay');
const submitButton=document.getElementById('submit');
const generateBtn = document.getElementById('generate-btn');

let displayPin=document.getElementById('displayPin');

let tryLeft=document.getElementById('numOfTry');
let totalTry=3;



function resetNotification(){
    successNotification.style.display='none';
    errorNotification.style.display='none';
}

resetNotification();

//Generate Pin and display output
generateBtn.addEventListener('click',function(){
    let randomNumber=Math.floor(1000+Math.random()*9000);
    displayPin.value=randomNumber;
    submitButton.disable=false;
    submitButton.style.backgroundColor="#495bc3"
    resetAll();
})


//Keypad event handler

// Key pad, User Input provide part.
keypadNumber.addEventListener('click', function (event) {
    resetNotification();
    let targetKey=event.target.innerText;
    if(targetKey==='C'){
        userInput.value="";
    }
    else if(targetKey=='>'){
        userInput.value=userInput.value.substring(1,userInput.value.length);
    }
    else if(targetKey=='<'){
        userInput.value=userInput.value.substring(0,userInput.value.length-1); 
    }
    else if(targetKey==='Submit'){
        if(userInput.value.length>0){
            varifyUserInput();
        }
        else{
            alert('Please Insert the pin first');
        }
    }
    else{
        userInput.value +=targetKey;
    }
  })
  
  function varifyUserInput() {
    if (userInput.value == displayPin.value) {
        successNotification.style.display = 'block';
    }
    // when not matching the user input
    else {
      errorNotification.style.display = 'block';
      totalTry--;
      tryLeft.innerText = totalTry;
  
      if (totalTry == 0) {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = '#3d4153';
      }
    }
  }

function resetAll(){
    totalTry=3;
    tryLeft.innerText=totalTry;
    userInput.value='';
    resetNotification();
}
