const button = document.getElementById("convert-btn")
const number= document.getElementById("number")
const output= document.getElementById("output")


const romanNumeral = {
  M:	1000,
CM :	900,
D	:500,
CD:	400,
C:	100,
XC	:90,
L	:50,
XL:	40,
X:	10,
IX	:9,
V:	5,
IV:	4,
I:	1,
}

button.addEventListener("click",(e)=>{
e.preventDefault()
const numberValue= Number(number.value);
if(number.value===""){
output.textContent="Please enter a valid number"
}
else if(isNaN(number.value)){
output.textContent="Please enter a valid number"
}else if(numberValue<1){
 output.textContent="Please enter a number greater than or equal to 1"
}else if(numberValue>=4000){
output.textContent="Please enter a number less than or equal to 3999"
}else{
  output.textContent= convertToRoman(numberValue)
}
})


const convertToRoman= (num)=>{

if(num===0){return ""}

 for(let roman in romanNumeral){
   
   if(num>=romanNumeral[roman]){
    return roman + convertToRoman(num-romanNumeral[roman])
   }
 }
}
