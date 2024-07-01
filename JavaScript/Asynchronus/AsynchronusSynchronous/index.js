// Synchronus 
console.log('Hello')

// Asynchronus
setInterval(function(){
    console.log('I am Interval')
    const h1 = document.querySelector('h1').textContent++
    console.log('I am in the Interval')

}, 4000)

// Synchronus
console.log('Done')