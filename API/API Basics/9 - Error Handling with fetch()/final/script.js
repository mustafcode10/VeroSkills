const main = document.querySelector("main");

fetch("https://dog.ceo/api/breed/australian/images/random/5")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const images = data.message
      .map(img => `<img src="${img}" alt="Random dog breed">`)
      .join("");
    main.insertAdjacentHTML("beforeend", images);
  })
  .catch(error =>
    console.log("There was a problem with the fetch: " + error.message)
  );
