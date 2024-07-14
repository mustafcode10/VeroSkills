const main = document.querySelector("main");

fetch("https://dog.ceo/api/breeds/image/random/3")
  .then(response => response.json())
  .then(data => {
    const images = data.message
    .map(img=> `<img src="${img}" alt="Randon dog images">`)
    .join("")
    main.insertAdjacentHTML('beforeend', images)
  });
