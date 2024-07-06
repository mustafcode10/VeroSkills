// fetch is used to request a resource which is external to the current file,
// it returns a promise that then resolves to a response object.
// Simple example of fetch and text and html file
// How to get file contents and load it to your web page AJAX
// Chaining of promises and how they work

// const url2 = "text3.txt";
const url = 'html3.html'
const output = document.querySelector('.output')
const eleH1 = document.querySelector("h1");
eleH1.addEventListener("click", fetchData);

function fetchData() {
  fetch(url)
    .then((response) => {
      console.log(response);
      if (response.status == 200) {
        return response.text();
      }
    })
    .then((data) => {
      // console.log(data)
      eleH1.innerHTML += data;
      output.textContent = data
    });
}

// fetchData()


