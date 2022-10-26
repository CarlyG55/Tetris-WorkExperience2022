const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 40;
const canvas = document.getElementById("gameCanvas")
const cxt = canvas.getContext("2d")
//CONSTANTS


let gridMatrix = getEmptygameCanvas(); 


cxt.canvas.width = COLS * BLOCK_SIZE;
cxt.canvas.height = ROWS * BLOCK_SIZE;
//CALCULATE WIDTH AND HEIGHT OF CANVAS FROM CONSTANTS
const width = cxt.canvas.width;
const height = cxt.canvas.height;

cxt.scale(width, height)

function getEmptygameCanvas(){
    let matrix;
    for (let i=0; i<ROWS; i++) {
        for (let j=0; j<COLS; j++) {
            matrix[i][j]=0;
            cxt.fillStyle = 0;
            cxt.fillRect(i*BLOCK_SIZE, j*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE)
        }
    }
    return matrix;
}
