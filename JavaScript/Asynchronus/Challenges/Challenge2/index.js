// Use fetch and any async topics you've learned to spend a GET request to 'https://swapi.dev/api/people'
// use the response body returned and manipulate the DOM  to display the correct info
// Challenge if you can get the name of each person's first film

fetch('https://swapi.dev/api/people')
.then(res => res.json())
.then(peopleObject => {
    // console.log(peopleObject)
    const firstThree = peopleObject.results.slice(0,3)
    console.log(firstThree[0].name)
    document.querySelector('.name-1').textContent += ' ' + firstThree[0].name
    document.querySelector('.name-2').textContent += ' ' + firstThree[1].name
    document.querySelector('.name-3').textContent += ' ' + firstThree[2].name
    const firstPersonFirstFilm = peopleObject.results[0].films[0]
    console.log( firstPersonFirstFilm)
   return firstPersonFirstFilm
})
.then(firstPersonFirstFilm => fetch(firstPersonFirstFilm))
.then(res => res.json())
.then(realData => {
    document.querySelector('.film-1').textContent += ' '+ realData.title
})
