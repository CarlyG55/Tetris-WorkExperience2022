const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 40;
const canvas = document.getElementById("gameCanvas")
const cxt = canvas.getContext("2d")
//CONSTANTS

cxt.canvas.width = COLS * BLOCK_SIZE;
cxt.canvas.height = ROWS * BLOCK_SIZE;
//CALCULATE WIDTH AND HEIGHT OF CANVAS FROM CONSTANTS
width = cxt.canvas.width;
height = cxt.canvas.height;

cxt.scale(width, height)

class gameCanvas {
    constructor(cxt) {
        this.cxt = cxt;
        this.gameContainer = this.getEmptygameCanvas();
    }
} 