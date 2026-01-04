import {add, reset, decrease} from './counter.js'

const addBtn = document.getElementById("add");

addBtn.addEventListener("click", function() {
  
    add(); 
});


const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", function(){
    reset();
});

const decreaseBtn = document.getElementById("decrease");

decreaseBtn.addEventListener("click", function(){
    decrease()
});

