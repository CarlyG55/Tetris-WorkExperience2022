fetch("./LeaderBoardData.json")
.then(data => {
    return data.json();
})
.then(insideData => {
    let TableData = "";
    insideData.map(values => {
        TableData += 
        `<tr>
        <td> ${values.name} </td>
        <td> ${values.score} </td>
        </tr>`
    });
    
    document.getElementById("bodyOfTable").innerHTML = TableData;
})