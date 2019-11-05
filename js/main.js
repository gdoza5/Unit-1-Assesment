console.log('Muffin')


let sum;




let subButton = document.getElementById('sub')
let addButton = document.getElementById('add')
let numInput = document.getElementById('number')
let scoreBoard = document.querySelector('.scoreboard')


scoreBoard.textContent = sum;



document.querySelector('#sub').addEventListener('click', sub)

document.querySelector('#add').addEventListener('click', add)


function init(){
    sum = 0;
    render();

};



function add(){
    sum  += parseFloat(numInput.value);
    render();
    console.log('test')
};

function sub(){
    sum  -= parseFloat(numInput.value);
    render();
    console.log('cutie')
};

function render(){
    scoreBoard.textContent = sum;
    
};


init();