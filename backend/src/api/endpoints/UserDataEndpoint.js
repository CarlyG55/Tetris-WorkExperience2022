function getData(url){
    function sortByProperty(property){  
        return function(a,b){  
           if(a[property] > b[property])  
              return -1;  
           else if(a[property] < b[property])  
              return 1;  
       
           return 0;  
        }  
     }
    
    fetch(url)
    
    .then(data => {
        let data1 = data.json();
        return data1;
    })
    
    .then(data => {
        data.sort(sortByProperty("score"));
        console.log(data);
        return data;
    })
    
}



export const UserDataEndpoint = (request) => {
    console.log(`Request: ${JSON.stringify(request)}`)
    let data = "";
    data = getData("backend\src\LeaderboardData.json")
    return { data }
}