
let init = 0;

function add() {
    init++;

    document.getElementById("number").innerHTML = init;
}

function reset() {
    
    init = 0;
    document.getElementById("number").innerHTML = init;
}

function decrease() {
    
    if (init > 0) {
        init--;
    }
   
    document.getElementById("number").innerHTML = init;

};

export { add, reset, decrease }