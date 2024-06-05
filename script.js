let resetbtn = document.querySelector(".reset")
let boxes = document.querySelectorAll(".box")
let turn0 = true
let msg = document.querySelector(".mgs")
let msgCon = document.querySelector(".mgs-con")
let count=0;

 
const arr = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
]





reset=function(){
    
    turn0=true;
    count=0; 
    msgCon.classList.add("hide");
    enableBoxes();
}


boxes.forEach(function(elem){
elem.addEventListener("click",function()
{ if(turn0 == true){
        elem.innerText="0"
    turn0 = false;
    elem.disabled=true
   
}
        else{
        elem.innerText="X"
        turn0 = true
    elem.disabled=true}
count++
  let isWinner = winner()
if(count === 9 && !isWinner){
    gameDraw();
}})})

let disabledBoxes = function()
{for(let box of boxes){
    box.disabled=true}}

    let gameDraw = function(){
        msg.innerHTML=`game was draw`
        msgCon.classList.remove("hide")
        disabledBoxes();
    }

let enableBoxes= function(){
    for(box of boxes){
        box.innerText=""
        box.disabled=false;
    };
}







let show =function(win){

    msg.innerText= `Winner ${win}`
    msgCon.classList.remove("hide")
    show();
    disabledBoxes();
}


let winner = function(){
for (let pattern of arr)
{
   let val1 =boxes[pattern[0]].innerText;
    let val2 =boxes[pattern[1]].innerText;
    let val3 =boxes[pattern[2]].innerText;
    console.log(pattern)
   if ( val1 != "" && val2 != "" && val3 != ""){
   
    if(val1 === val2 && val2 === val3){
    
    show(val1);  
    return true;
     
    }

   }
}}

resetbtn.addEventListener("click",reset)