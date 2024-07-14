const main = document.querySelector("main");

fetch('https://dog.ceo/api/breeds/image/random')
.then(res => res.json())
.then(data => {
    console.log(data)
    const img = `<img src="${data.message}" alt="Randon dog breed">`
    main.insertAdjacentHTML('beforeend',  img)
})
