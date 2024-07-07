// connect to https://randomuser.me/api/?results and retrieve data
// AJAX request to Data and update of page elements with new data
// Output of page contents AJAX
// Complex JSON data with JavaScript

const url = 'https://randomuser.me/api/?results=';
const output = document.querySelector('.output');
const myInput = document.querySelector('input');
document.querySelector('button').addEventListener('click', fetchData);

function fetchData() {
    const fullUrl = `${url}${myInput.value}`;
    fetch(fullUrl)
        .then(response => response.json())
        .then(data => outputData(data.results));
}

function outputData(arr) {
    arr.forEach(createRecord);
}

function createRecord(person) {
    const record = createHtmlElement('', 'div', output);
    record.style.border = '1px solid #ddd';

    createHtmlElement(`${person.name.title} ${person.name.first} ${person.name.last}`, 'div', record);
    createHtmlElement(`Age ${person.dob.age} <small>${person.dob.date}</small>`, 'div', record);
    createHtmlElement(person.email, 'div', record);
}

function createHtmlElement(html, elementType, parent) {
    const element = document.createElement(elementType);
    parent.appendChild(element);
    element.innerHTML = html;
    return element;
}