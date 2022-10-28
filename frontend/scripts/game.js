const blocks = [
    {
        array: [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
        colour: 'yellow',
        piece_name: 'oh'
    },
       
    {
        array: [
        [0,0,1,0],
        [0,0,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
        colour: 'blue',
        piece_name: 'jay'
    },
    {
        array: [
       [0,1,0,0],
       [0,1,0,0],
       [0,1,1,0],
       [0,0,0,0]
        ],
        colour: 'orange',
        piece_name: 'elle'
    },
       
    {
        array: [
        [0,0,0,0],
        [0,0,1,1],
        [0,1,1,0],
        [0,0,0,0]
        ],
        colour: 'green',
        piece_name: 'ess'
    },
    {
        array: [
        [0,0,0,0],
        [0,1,1,1],
        [0,0,1,0],
        [0,0,0,0]
        ],
        colour: 'purple',
        piece_name: 'tee'
    },
    {
        array: [
        [0,0,0,0],
        [1,1,0,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
        colour: 'red',
        piece_name: 'zed'
    },
       
    {
        array: [
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0]
        ],
        colour: 'cyan',
        piece_name: 'eye'
    },

]

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 40; //
const canvas = document.getElementById("gameCanvas") 
const cxt = canvas.getContext("2d")
const z_key = 90
const up_key = 38
const left_arrow = 37
const right_arrow = 39
const space_bar = 32
const down_arrow = 40
const pause = 27

//CONSTANTS


let gridMatrix = getEmptygameCanvas(); 
let timeUntilMoveDown=60;
let raf = null;
let IsGamePaused = false;
let block = generateBlock();

let score = 0



cxt.canvas.width = COLS * BLOCK_SIZE;
cxt.canvas.height = ROWS * BLOCK_SIZE;
//CALCULATE WIDTH AND HEIGHT OF CANVAS FROM CONSTANTS
const width = cxt.canvas.width;
const height = cxt.canvas.height;

//cxt.scale(width, height)

function getEmptygameCanvas(){
    let matrix = [];
    for (let i=0; i<ROWS; i++) {
        matrix[i] = [];
        for (let j=0; j<COLS; j++) {
            matrix[i][j]=0;
            cxt.fillStyle = 0;
            cxt.fillRect(j*BLOCK_SIZE, i*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE)
        }
    }
    return matrix;
}

function setBlock(){
    const blockRow = block.row;
    const blockColumn = block.column;
    const blockArray = block.array;
    const blockColour = block.colour;

    for (let row=0; row<blockArray.length; row++){
        for (let column=0; column<blockArray[row].length; column++){
            const cell = blockArray[row][column];
            if (cell === 1){
                if (block.row + row < 0) {
                    return endgame();
                }
                gridMatrix[blockRow+row][blockColumn+column] = blockColour;
            }
        }
    }
    block = generateBlock();
    DeletefullRows();
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
            cxt.fillRect(y*BLOCK_SIZE, x*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE)
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
    colour: randomBlock.colour,
    row: -1,
    column: 5}
}

function clockwise_rotate(arr){
   const newarray = arr[0].map((val, index) => arr.map(row => row[index]).reverse());
   return newarray;
   }
    
function anti_rotate(arr){
    const newarray = arr[0].map((val, index) => arr.map(row => row[row.length-1-index]));
    return newarray;
    }

function updateTimeUntilMoveDown(){
    if (timeUntilMoveDown > 15) {
        timeUntilMoveDown = timeUntilMoveDown - 5
    }
}
// create main game function
function game(){
    raf = requestAnimationFrame(game);
    // remake game canvas
    if(IsGamePaused === false) {
        cxt.clearRect(0,0,width,height);
        //draw fixed blocks
        for (let i=0; i<ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (gridMatrix[i][j] !== 0) {
                    cxt.fillStyle = gridMatrix[i][j];
                    cxt.fillRect(j * BLOCK_SIZE, i * BLOCK_SIZE, BLOCK_SIZE - 0.5, BLOCK_SIZE - 0.5)
                }
            }
        }
        //move block down
        counter++;
        if (counter > timeUntilMoveDown) {
            counter = 0;
            block.row++;
            if (ismovevalid(block.array, block.row, block.column)===false) {
                block.row--;
                setBlock();
            }
        }


        //fill block in play
        for (let row = 0; row < block.array.length; row++) {
            for (let col = 0; col < block.array[row].length; col++) {
                if (block.array[row][col] !== 0) {
                    cxt.fillStyle = block.colour;
                    cxt.fillRect((block.column + col) * BLOCK_SIZE, (block.row + row) * BLOCK_SIZE, BLOCK_SIZE - 0.5, BLOCK_SIZE - 0.5)
                }
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
    increasescore(linecounter);
}

window.onkeydown = function(move){
    if (move.keyCode === left_arrow) {
        const tempCol = block.column - 1;
        if (ismovevalid(block.array, block.row, tempCol)) {
            block.column--;
        }
    }
    if (move.keyCode === right_arrow) {
        const tempCol = block.column + 1;
        if (ismovevalid(block.array, block.row, tempCol)) {
            block.column++;
        }
    }
    if (move.keyCode === down_arrow) {
        const tempRow = block.row + 1;
        if (ismovevalid(block.array, tempRow, block.column)) {
            block.row++;
        }
    }

    if (move.keyCode === space_bar) {
        const tempRow = block.row + 10;
        if (ismovevalid(block.array, tempRow, block.column)) {
            block.row = block.row+10;
        }
    }
    if (move.keyCode === up_key) {
        const tempArray = clockwise_rotate(block.array);
        if (ismovevalid(tempArray, block.row, block.column)) {
            block.array = tempArray;
        }
    }
    if (move.keyCode === z_key) {
        const tempArray = anti_rotate(block.array)
        if (ismovevalid(block.array, block.row, block.column)) {
            block.array = tempArray;
        }
    }
    if (move.keyCode === pause) {
        IsGamePaused = !IsGamePaused;
    }
}

function endgame(){
    cancelAnimationFrame(raf);
    window.open('gameOver?score=' + score, "_self");
}

function increasescore(numberOfLines){
    switch(numberOfLines){
        case 1: 
            score = score + 40
            break;
        case 2:
            score = score + 100
            break;
        case 3: 
            score = score + 300
            break;
        case 4:
            score = score + 1200
            break;
}}
//collisions
function ismovevalid(matrix, blockRow, blockCol){
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            if (matrix[row][col] === 1 &&
                (col + blockCol < 0 ||
                    col + blockCol > 9 ||
                    row + blockRow > 19 ||
                    row + blockRow < 0 ||
                    gridMatrix[row+block.row][col + block.column] !== 0)){
                        return false;
                    }
        }
    }
    return true;
}

//timer

let isSetTimmeoutRunning = false;

function startCountUp(){
    isSetTimmeoutRunning = true;
    var counter = 0;
    
    document.getElementById("countup-text").innerHTML = "<p>" + 0 + "</p>";

    var interval = setInterval(function(){
      counter++;
      document.getElementById("countup-text").innerHTML = "<p>" + counter + "</p>";
      if( isSetTimmeoutRunning === false ){
        document.getElementById("countup-text").innerHTML = "";
        clearInterval(interval);
      }
      
    }, 1000);
}

setInterval(updateTimeUntilMoveDown, 30000)
window.onload = function() {startCountUp()};
raf = requestAnimationFrame(game);
