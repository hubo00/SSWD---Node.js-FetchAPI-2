// api key
const apiKey = 'FsyZd8ZVP0EEir5YLb3Ha8aoHkfoK1gfrxRgHwXN';

// HTTP request settings
const headers = new Headers();
const reqInit = {method: 'GET', headers: headers, mode: 'cors', cache: 'default'};

// async function to call API and get data
async function retrieveData(){
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    try {
        // call API 
        const response = await fetch(url, reqInit);
        // get JSON data as response from api call
        const json = await response.json();

        console.log(json);

        displayData(json);

    } catch(err){
        console.log(err);
    }
}

retrieveData();

function displayData(apiData){
    const output = `
    <img src='${apiData.hdurl}'>
    <h4 id="nasatitle">${apiData.title}</h4>
    <p id="nasadate">Credit: NASA, ${apiData.date}</p>`;
    document.getElementById('nasa').innerHTML = output;
}

