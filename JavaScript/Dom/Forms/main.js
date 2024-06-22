const form = document.querySelector('form')
const copiedTextForm = document.querySelector('.copied-text')


function handleClick(e){
    
  copiedTextForm.textContent = e.target.value
}

function handleInput(e){
    
    copiedTextForm.textContent = e.target.value
  }



// form.addEventListener('click', handleClick)
// form.addEventListener('input', handleInput)
//Html onclick
// form.onclick = handleClick


// prevent default
// const count = document.querySelector('.count')

// setInterval(function(){
// count.textContent++

// }, 1000)

// form.addEventListener('click', function(e){
//     e.preventDefault()
//     copiedTextForm.textContent = e.target.value

// })

const checkbox = document.querySelector('#id-checkbox')
checkbox.addEventListener('click', checkboxClick)

//some event you can preventDefault like check box some cant preventDefault
function checkboxClick(e){
    e.preventDefault()
    const output = document.querySelector('#output-box').textContent = 'CHEKING PREVENTED BY e.preventDefault'
}


