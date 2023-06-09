let color = 'black';
let click = true;
function populateBoard(size = 16){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns =   `repeat(${size}, 1fr)`;
    board.style.gridTemplateRow = `repeat(${size}, 1fr)`;

    let amount = size * size;

    for(let i =0; i<amount; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard()

function changeSize(input){
    if (input >= 2 && input <=100){
        document.querySelector('.error').style.display='none'
        populateBoard(input);
    } else {
        document.querySelector('.error').style.display='flex';
        throw new Error('Too many squares');
    }
}


function colorSquare(){
if(click) {    
    if(color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random() *360}, 100%, 50%)`
    } else{
        this.style.backgroundColor = color;
    }
}
}

function changeColor(colors){
    color= colors;
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor='white');
}

document.querySelector("body").addEventListener("click", (e)=>{
    if(e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT'){
        click = !click;
        if(click){
            document.querySelector('.mode').textContent = 'Mode: coloring'
        } else{
            document.querySelector('.mode').textContent = 'Mode: Not coloring'
        }
    }
})