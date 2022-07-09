const display= document.querySelector('.display');
const button = Array.from(document.querySelectorAll('.button'));

button.map((value)=>{
    value.addEventListener('click',eventfunc)
});

function eventfunc(e){
 switch(e.target.innerText){
    case 'ac':
        display.innerText = '';
        break;
    case 'c':
        if(display.innerText != "error"){
        display.innerText = display.innerText.slice(0,-1);}
        else{
            display.innerText = '';
        }
        break;
    case '=':
        try{
        display.innerText = eval(display.innerText);}
        catch{
            display.innerText = "error";
        }
        break;
    default:
        display.innerText += e.target.innerText;
 }
}
