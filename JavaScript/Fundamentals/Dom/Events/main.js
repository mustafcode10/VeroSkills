function greetings() {
    // console.log('Hi Greetings')
  
}

// Event listener attached from Javascript
const myElemTag = document.querySelector('.js')


function jsGreentings(){
    console.log('Greetings 1 from Js')
    
}
function jsGreentings2(){
    console.log('Greeting 2 from Js')
}

// addEventListener is method.
myElemTag.addEventListener('click', jsGreentings)
myElemTag.addEventListener('click', jsGreentings2)

// onclick isnt method it runs on time
// myElemTag.onclik = jsGreentings2


// See in Events Obj

const myTag = document.querySelector('.js')

function eventInHtml(e) {
    console.log(e)
}

function evenInJavaScript(e) {
    console.log(e)
}

myElemTag.addEventListener('click', evenInJavaScript)



