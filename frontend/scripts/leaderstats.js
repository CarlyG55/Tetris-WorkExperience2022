import { apiMessageSender } from "./api/apiMessageSender.js";

function doGetDataToTable() {
    function sortByProperty(property){  
        return function(a,b){  
           if(a[property] > b[property])  
              return -1;  
           else if(a[property] < b[property])  
              return 1;  
       
           return 0;  
        }  
     }
    
    apiMessageSender.get('/leaderboard')
    
    .then(data => {
        console.log(data);
        data.data.sort(sortByProperty("score"));
        return data.data;
    })

    
    .then(sortedData => {
        let TableData = "";
        console.log(sortedData);
        sortedData.map(values => {
            TableData += 
            `<tr>
            <td> ${values.name} </td>
            <td> ${values.score} </td>
            </tr>`
        })
    
        document.getElementById("bodyOfTable").innerHTML = TableData;
    })
}

function addPlayer(name) {
    let newPlayer = {name : 0};
    fetch("./LeaderboardData.js")
    .then(data => {
        let data1 = data.json();
        return data1;
    })
    
    .then(data => {
        data.push(newPlayer);
        return data;
    })
}

doGetDataToTable();