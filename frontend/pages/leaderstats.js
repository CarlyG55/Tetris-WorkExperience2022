const table = document.getElementById("#ScoreTable");

var LeaderboardData = {
    "jhon":1, "Amy":2, "Jeff":3
};

function addRows(name, score) {
    const table = document.getElementById("ScoreTable");

    console.log(table);
    let newRow = table.insertRow(-1);
    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    let NameofPerson = document.createTextNode(name);
    let ScoreofPerson = document.createTextNode(score);
    newCell1.appendChild(NameofPerson);
    newCell2.appendChild(ScoreofPerson);
   }

function loop() {
    for (let person in LeaderboardData) {
        names = person.key
        score = person.value
        addRows(names, score)
    }
}