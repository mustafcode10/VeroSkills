const main = document.querySelector("main");

fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(data => {
    const img = `<img src="${data.message}" alt="Random dog image">`;
    main.insertAdjacentHTML("beforeend", img);
  });
