// constants - urls for API fetch
const caturl = 'https://aws.random.cat/meow';
const dogurl = 'https://random.dog/woof.json';
const cat = document.getElementById('cat');
const dog = document.getElementById('dog');

cat.addEventListener('click', getCats);
dog.addEventListener('click', getDogs);

async function getCats(){
    try {
        const response = await fetch(caturl, reqInit);

        const json = await response.json();

        console.log(json);

        displayCats(json);

    } catch(err){
        console.log(err);
    }
}

async function getDogs(){
    try {
        const response = await fetch(dogurl, reqInit);

        const json = await response.json();

        console.log(json);

        displayDogs(json);

    } catch(err){
        console.log(err);
    }
}

function displayDogs(apiData){
    const output = `<img src='${apiData.url}'>`
    document.getElementById('animal').innerHTML = output;
}

function displayCats(apiData){
    const output = `<img src='${apiData.file}'>`
    document.getElementById('animal').innerHTML = output;
}