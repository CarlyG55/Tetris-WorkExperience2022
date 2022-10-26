/*javascript 2d array practice, am attempt to create arrays for the tetriminoes*/

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
        [0,0,0,1],
        [0,0,0,1],
        [0,0,0,1],
        [0,0,0,1]
        ],
        colour: 'cyan',
        piece_name: 'eye'
    },

]

function clockwise_rotate(arr){
console.log(arr);
const newarray = arr[0].map((val, index) => arr.map(row => row[index]).reverse());
console.log(newarray);
return newarray;
}

const object = 2


clockwise_rotate(blocks[4].array)


function anti_rotate(arr){
console.log(arr);
const newarray = arr[0].map((val, index) => arr.map(row => row[row.length-1-index]));
console.log(newarray);
return newarray;
}

    
anti_rotate(blocks[4].array)

