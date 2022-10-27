const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 40; //
const canvas = document.getElementById("gameCanvas") 
const cxt = canvas.getContext("2d")
//CONSTANTS


let gridMatrix = getEmptygameCanvas(); 
let block = generateBlock();


cxt.canvas.width = COLS * BLOCK_SIZE;
cxt.canvas.height = ROWS * BLOCK_SIZE;
//CALCULATE WIDTH AND HEIGHT OF CANVAS FROM CONSTANTS
const width = cxt.canvas.width;
const height = cxt.canvas.height;

cxt.scale(width, height)

function getEmptygameCanvas(){
    let matrix = [];
    for (let i=0; i<ROWS; i++) {
        matrix[i] = [];
        for (let j=0; j<COLS; j++) {
            matrix[i][j]=0;
            cxt.fillStyle = 0;
            cxt.fillRect(i*BLOCK_SIZE, j*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE)
        }
    }
    return matrix;
}

//GENERATES GAME CANVAS GRID

let holdGridMatrix = getEmptyholdCanvas();

function getEmptyholdCanvas(){
    let holdMatrix = [];
    for (let x=0; x<4; x++) {
        holdMatrix[x] = [];
        for (let y=0; y<4; y++) {
            holdMatrix[x][y]=0;
            cxt.fillStyle = 0;
            cxt.fillRect(x*BLOCK_SIZE, y*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE)
        }
    }
    return holdMatrix
}

function generateBlock(){
    let randomNumber = Math.floor(Math.random()*7);
    const randomBlock = blocks[randomNumber]
    return {array: randomBlock.array,
    color: randomBlock.colour,
    row: -1,
    column: 5}}


function clockwise_rotate(arr){
   const newarray = arr[0].map((val, index) => arr.map(row => row[index]).reverse());
   return newarray;
   }
    
function anti_rotate(arr){
    const newarray = arr[0].map((val, index) => arr.map(row => row[row.length-1-index]));
    return newarray;
    }
        
window.onkeydown = function(rotate){
    if (rotate.keyCode === up_key) {
        block.array = clockwise_rotate(block.array)
    }
    else if (rotate.keyCode === z_key) {
        block.array = anti_rotate(block.array)
    }
    }
