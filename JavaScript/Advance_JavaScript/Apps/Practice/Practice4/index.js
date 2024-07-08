// Using Promise

const eleH1 = document.querySelector("h1");
const output = document.querySelector(".output");

eleH1.textContent = "Get Data";
eleH1.addEventListener("click", fetchData3);

const url = `https://jsonplaceholder.typicode.com/posts/1`;
function fetchData() {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        resolve(data);
      })
      .catch((err) => reject(err));
  });
}

fetchData().then((res) => {
  //  output.textContent += `${res.id} ${res.title}`
});
fetchData().catch((err) => console.log(err));

///////////////////////  Fetch Method
const url1 = "https://jsonplaceholder.typicode.com/posts";
fetch(url1)
  .then((res) => res.json())
  .then((arr) => {
    arr.forEach((res) => {
      // output.innerHTML += `<div> ${res.id}<br> - ${res.title}</div>`
    });
  })
  .catch((err) => console.log(err));

//////////////////////////////////////////////////////////
// JavaScript Data as JSON and JavaScript Objects
// Definition: JSON (JavaScript Object Notation) is a format for storing and transporting data.
//  JavaScript objects are used to represent data within the language.
const jsonString = '{"name": "Jane", "age": 25}';
const user = JSON.parse(jsonString);
console.log(user);
const newJsonString = JSON.stringify(user);
console.log(newJsonString);
////////////////////////////////////////////////////
const jsonData = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];

jsonData.forEach((val) => {
  // console.log(val)
  // output.innerHTML += `<div> ${val.name}<br> - ${val.age}</div>`
});
///////////////////////// asyn await catch errors

async function fetchData2() {
  try {
    const res = await fetch(url1);
    const data = await res.json();
    data.forEach((val) => {
      console.log(val);
      output.innerHTML += `<div> ${val.id}<br> - ${val.title}</div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

// fetchData2()

async function fetchData3() {
  try {
    const res = await fetch(url1);
    console.log(res);
    if (!res.ok) {
      throw new Error("Network errorssss");
    }
    const data = await res.json();
    data.forEach((val) => {
      // console.log(val)
      //   output.innerHTML += `<div> ${val.id}<br> - ${val.title}</div>`;
    });
  } catch (error) {
    console.log("Fetch errrrrooorsss", error);
  }
}

fetchData3();

/////////////////////// Promise all
// Promise.all in JavaScript
const promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
const promise2 = fetch("https://jsonplaceholder.typicode.com/posts/2");

Promise.all([promise1, promise2]).then(responses => {
    console.log(responses)
    return Promise.all(responses.map(response => response.json()))
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
})
