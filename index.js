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
        display.innerText = display.innerText.slice(0,-1);
    case '=':
        display.innerText = eval(display.innerText);
        break;
    default:
        display.innerText += e.target.innerText;
 }
}
