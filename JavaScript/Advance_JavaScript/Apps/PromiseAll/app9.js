// Returns a promise that returns a array of results
// Once the input promises are all fulfilled then the promise completes or
//if there are no inputs then it completes
// It will fail and reject once the promise is rejected or an error occurs

const titleElement = document.querySelector('h1');
const output = document.querySelector('.output');

titleElement.textContent = 'Click Me';
titleElement.addEventListener('click', getData);

const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 'Hello'));
const promise2 = new Promise(resolve => setTimeout(resolve, 1000, 'world'));
const promise3 = 'Laurence Svekis';
const promise4 = Promise.resolve('JavaScript');

const urls = ['my91.json', 'my92.json', 'my93.json'];

function getData() {
    console.log('ready');

    const requests = urls.map(url => fetch(url).then(response => response.json()));

    Promise.all(requests).then(displayData);
}

function displayData(dataArr) {
    dataArr.forEach(data => {
        output.innerHTML += `<div>${data.first} ${data.last} ${data.greet}</div>`;
    });
}

function getDataSingleUrl() {
    console.log('ready');

    const promiseSingleUrl = fetch(urls[0]).then(response => response.json());

    Promise.all([promiseSingleUrl]).then(dataArr => {
        dataArr.forEach(data => console.log(data));
    });
}

function getDataFromPromises() {
    console.log('ready');

    Promise.all([promise1, promise2, promise3, promise4]).then(displayPromisesData);
}

function displayPromisesData(dataArr) {
    dataArr.forEach(data => {
        output.innerHTML += `<div>${data}</div>`;
    });
}