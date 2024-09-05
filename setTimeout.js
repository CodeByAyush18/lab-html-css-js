


function fetchdataFromAPI(){
    const date = new Date();
    console.log("Fetching data from API: ",date.toLocaleString());
}

const dataFetchInterval = setInterval(fetchdataFromAPI,3000)
    setTimeout(function(){
        clearInterval(dataFetchInterval)
        console.log('Data fetching stopped after 15 seconds')
    },15000)
