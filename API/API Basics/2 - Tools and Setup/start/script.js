const main = document.querySelector("main");



fetch('https://dog.ceo/api/breeds/image/random')
.then(res => res.json())
.then(data => {
    // console.log(data)
    const image = `<img src="${data.message}" alt"Randon image">`
    main.insertAdjacentHTML('beforeend', image)

})