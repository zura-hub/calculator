const calcDislpay = document.querySelector('.calc-input');


function show(btn){
    let display = calcDislpay.value += btn.value;
    
}

function clear(){
    calcDislpay.value = ' ';
}

function backSpace (){
    calcDislpay.value = 
    calcDislpay.value.toString().
    slice(0,-1);
}

function equal(){
    calcDislpay.value =
    eval(calcDislpay.value)
}
