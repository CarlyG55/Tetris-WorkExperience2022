const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 40; //
const canvas = document.getElementById("gameCanvas") 
const cxt = canvas.getContext("2d")
const left_arrow = 37
const right_arrow = 39
const down_arrow = 25
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
let counter = 0;
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

let nextGridMatrix = getEmptynextCanvas();

function getEmptynextCanvas(){
    let nextMatrix = [];
    for (let x=0; x<12; x++) {
        nextMatrix[x] = [];
        for (let y=0; y<4; y++) {
            nextMatrix[x][y]=0;
            cxt.fillStyle = 0;
            cxt.fillRect(x*BLOCK_SIZE, y*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE)
        }
    }
    return nextMatrix
}

function generateBlock(){
    let randomNumber = Math.floor(Math.random()*7);
    const randomBlock = blocks[randomNumber]
    return {array: randomBlock.array,
    color: randomBlock.colour,
    row: -1,
    column: 5}}

// create main game function
function game(){
    // remake game canvas
    cxt.clearRect(0,0,width,height);
    //draw fixed blocks
    for (let i=0; i<ROWS; i++) {
        for (let j=0; j<COLS; j++) {
            cxt.fillStyle = gridMatrix[i][j];
            cxt.fillRect(i*BLOCK_SIZE, j*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE)
        }
    }
    //move block down
    counter++;
    if (counter > 40){
        counter=0;
        block.row++;
    
    }
    //fill block in play
    for (let row=0; row<block.array.length; row++) {
        for (let col=0; col<row.length; col++) {
            if (block.array[row][col] !=0){
                cxt.fillStyle = block.colour;
                cxt.fillRect((block.row+row)*BLOCK_SIZE, (block.col+col)*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE)
            }
        }
    }
}

function DeletefullRows(){
   let linecounter = 0;
    for (let line=ROWS-1; line>=0; line--) {
        let areThereZeros = false;
        for (let collumn=0; collumn<COLS; collumn++) {
            if (gridMatrix[line][collumn] === 0) {
                areThereZeros = true;
            }
        }
        if (areThereZeros === false) {
            linecounter++;
            for (let newRow=line; newRow>0; newRow--) {
                for (let newCol=0; newCol<COLS; newCol++) {
                    gridMatrix[newRow][newCol] = gridMatrix[newRow-1][newCol]
                }
            }
            for (let col=0; col<COLS; col++){
                gridMatrix[0][col] = 0
            }    
        }
    }

}

window.onkeydown = function(move){
    if (move.keyCode === left_arrow) {
        block.column--;
    }
    else if (move.keyCode === right_arrow) {
        block.column++;
    }
    
    else if (move.keyCode === down_arrow) {
        block.row--;
    }

}
