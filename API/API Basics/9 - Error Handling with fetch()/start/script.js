const main = document.querySelector("main");

fetch("https://dog.ceo/api/breed/australian/images/random/5")
  .then(response => response.json())
  .then(data => {
    const images = data.message
      .map(img => `<img src="${img}" alt="Random dog breed">`)
      .join("");
    main.insertAdjacentHTML("beforeend", images);
  });
