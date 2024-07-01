// Asyn await

//Asyn without await
async function add(a, b) {
  console.log(a + b);
  return a + b;
}
// asyn without await
console.log(add(2, 3));

// Asyn with Await
const delayedPromise = new Promise((resolve) =>
  setTimeout(() => resolve("resolved in 2 secs"), 2000)
);

async function awaitingForPromise() {
  await delayedPromise;
  console.log(delayedPromise);
}

awaitingForPromise();

// Using asyn await with fetch
// fetch is promise and its asyn and fetch return another promise
// and then you need .json() to return obj

async function awaitingForFetch() {
  const resultFetch = await fetch("https://jsonplaceholder.typicode.com/posts");
  const resultOfFetchResponse = await resultFetch.json();
  console.log(resultOfFetchResponse);
}
// awaitingForFetch()

// Another way  fetch then
async function awaitingForFetch2() {
  const resultFetch = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
awaitingForFetch2();
