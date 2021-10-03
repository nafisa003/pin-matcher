let randomNumber=0;
function getRandom()
{
     randomNumber=Math.round(Math.random()*(9999-1000)+1000); //setting max=9999 and min=1000
}

document.querySelector(".generate-btn").addEventListener('click',function(){
    getRandom();
    document.getElementById('generate-screen').value=randomNumber; 
   
})

let screenValue='';
let screen=document.getElementById('cal-screen');
let buttons=document.querySelectorAll('.button');

for(item of buttons){
    item.addEventListener('click',(e)=>{
       let buttonText=e.target.innerText;
       if(buttonText=='C')
       {
           screenValue='';
         //  screen.value=screenValue;
       }
       else if(buttonText=='<')
       {
            screenValue=screenValue.slice(0,-1);
       }
       else{
           screenValue+=buttonText;
       }
       screen.value=screenValue;
    })
   
}


document.querySelector('.submit-btn').addEventListener('click',function(){
   
    let pin=parseInt(screenValue);
    let notify_no=document.getElementById('notify-no');
    let notify_yes=document.getElementById('notify-yes');
    let action_no=document.getElementById('action-no');
    let action_left=parseInt(action_no.innerText);

    if(randomNumber===pin)
    {
        notify_yes.style.display='block';
        notify_no.style.display='none';  
        action_no.innerText=3; 
    }
    else
    {
        notify_no.style.display='block';
        notify_yes.style.display='none'; 
        action_no.innerText=action_left-1;
    }
    screenValue='';
    screen.value=screenValue;
    document.getElementById('generate-screen').value='';

})