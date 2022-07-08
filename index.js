const display = document.querySelector('.display');
const button =Array.from( document.querySelectorAll('.button'));
button.forEach(val=>{
    val.addEventListener('click',((e)=>{
        switch(e.target.innerText){
            case 'c':
                display.innerText = '';
                break;

                case '→':
                display.innerText = display.innerText.slice(0,-1);
                break; 
            case '=':
                try{
                display.innerText = eval(display.innerText);}
                catch{
                        display.innerText="error";
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
      
    }))
});

