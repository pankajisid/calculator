const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");


let currentInput='';
let previousInput='';
let operator ='';

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        display.value ='0';
        const value = button.value;
        if(value==='AC'){
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value ='0';
        }
        else if(currentInput.length===0 &&['0','AC','%','/','+','-','x','back','='].includes(value)){
            display.value='0';
        }
        else {
            if(['+','-','x','/','back'].includes(value)){
                if(value==='back'){
                    currentInput = currentInput.slice(0,-1);
                    display.value=currentInput;
                }
                else {
                    previousInput = currentInput;
                    operator = value; 
                    currentInput = '';
                    display.value = operator;
                }
            }
            else {
                currentInput +=value;
                display.value = currentInput;
            }
        }
        if(value ==='='){
            if(operator==='+'){
                display.value= parseFloat(currentInput)+parseFloat(previousInput);
            }
            if(operator==='-'){
                display.value= parseFloat(currentInput)-parseFloat(previousInput);
            }
            if(operator==='/'){
                display.value= parseFloat(currentInput)/parseFloat(previousInput);
            }
            if(operator==='x'){
                display.value= parseFloat(currentInput)*parseFloat(previousInput);
            }
        }
        /*
        else if(value="back" && arr.length!==0){
            arr.pop();
        }
        else if(value==="."){
            if(arr.length!==)
        }
        arr.push(value);
        if(value==='AC') display.value='';
        else if(value==='='){
            display.value = 10;
        }
        else {
            display.value +=value;
        }*/
    });
});