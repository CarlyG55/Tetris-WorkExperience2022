import data from '../../LeaderboardData.json' assert { type: 'json' };

function getData(){
    function sortByProperty(property){  
        return function(a,b){  
           if(a[property] > b[property])  
              return -1;  
           else if(a[property] < b[property])  
              return 1;  
       
           return 0;  
        }  
     }

    
    data.sort(sortByProperty("score"));
    console.log(data);
    return data;
}



export const UserDataEndpoint = (request) => {
    //console.log(`Request: ${JSON.stringify(request)}`)
    let data = "";
    data = getData()
    return { data }
}