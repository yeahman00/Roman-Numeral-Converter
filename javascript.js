let inputBox = document.getElementById("num");
let buttonClick = document.getElementById("clicker");

//allows hitting enter to activate the button click

 inputBox.addEventListener("keyup",function(key){
    if (key.keyCode === 13){            buttonClick.click(convertToRoman(num));
    }
  })

//when button is clicked run the function

buttonClick.addEventListener("click",function(){convertToRoman(num)});

function convertToRoman(num) {
 num = document.getElementById("num").value;
 let display = document.getElementById("display");
 let answerNum = 0;
 let answer = "";
 let ronum = [
 'M̄','C̄M̄','D̄','C̄D̄','C̄','X̄C̄','L̄','X̄L̄','X̄','MX̄','V̄','MV̄',  
 'M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']

 let value = [1000000,900000,500000,400000,100000,90000,50000,40000,10000,9000,5000,4000,1000,900,500,400,100,90,50,40,10,9,5,4,1];
  
  //if user inputs only numbers
  
  if (!/[^0-9]/.test(num)){
    
    //limit on how high we'll go
    
   if (num >= 4000000){
    return display.innerHTML = "Limit is 3,999,999"/*"I learned a lot about roman numerals while doing this, however roman numerals for 4 million and beyond was not part of it";*/
  } 
    //no roman numeral for 0
    
  else if (num == 0){
    return display.innerHTML = "No roman numeral for zero";
  }
    //if it's a usable number
    
  else {
    for (let a = 0; a < value.length; a++){
    while (num >= value[a]){
      answer = answer.concat(ronum[a]);
      num -= value[a];
    }
    }
  }
  }
  
  //only usable letters
  
  else if (!/[^MCDXLIVM̄D̄C̄L̄X̄V̄]/.test(num)){
   for (let b = 0; b < value.length; b++){
     for (let c = 0; c < ronum.length; c++){
       
//when in an array the macron above the letter and the letter itself each takes up its own slot with in the array so with L̄ the first slot would be L and the next would be the macron
       
       //check for dual macron letter combo
       
     if ((num[b]+num[b+1]) + (num[b+2]+num[b+3]) == ronum[c]){
      answerNum += value[c];
      b += 3;
    }  
       //check for M + macron letter combo
        
    else if (num[b] + (num[b+1]+num[b+2]) == ronum[c]){
      answerNum += value[c];
      b+= 2;
    }
       //check for dual regular lettered combos
       
    else if (num[b] + num[b+1] == ronum[c]){
      answerNum += value[c];
      b++;
    }
       
       //only single letter values
       
    else if (num[b] == ronum[c]){
      answerNum += value[c];
    }
    }
   }
    
    //returns numerical answer (roman numeral to number)
    
    return display.innerHTML = answerNum;
  }
  
  //returns if none of the above works
  
  else{
    return display.innerHTML = "Invalid input";
    }
  
  //returns roman numeral answer (number to roman numeral)
  
  return display.innerHTML = answer;
}

