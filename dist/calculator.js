let finaloperation="";
console.log("Calculator app");
let numOpNode=document.querySelectorAll(".numOp");
let numOpArray=Array.from(numOpNode);  //convert nodelist to array

//operationpanel
let operationpanel=document.querySelector(".operationpanel");    
//resultvaluepanel
let resultvaluepanel=document.querySelector(".resultvaluepanel");

numOpArray.forEach(element => {
    element.addEventListener("click",addToOperation);
    function addToOperation(){
    console.log(finaloperation);
    finaloperation=finaloperation.concat(`${element.textContent}`);
    let resultnode=document.createTextNode(`${finaloperation}`);
    // screenpanel.appendChild(resultnode);
    operationpanel.innerHTML=`${finaloperation}`;
      // console.log(finaloperation);
    }
    
 });

 //equals to button
 
let equalsto=document.querySelector(".equalsto");
equalsto.addEventListener("click",getSolution);

function getSolution(){
   let solution=eval(finaloperation);
   console.log(`Result of your operation is ${solution}`);
   resultvaluepanel.innerHTML=`${solution}`;
}







































