const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('score');

document.getElementById('score').innerHTML='score: ' + myParam
