const element = document.querySelector('section')

// function onBlue(e){
//   console.log(e.target)
// }
// function onGreen(){
//     console.log(e.target)
// }

function handleClick(e){
    e.stopPropagation()
    if(e.target.textContent.includes('Blue')){
        console.log(e.target.textContent)
    } else {
        console.log(e.target.textContent)
    }
  
}


element.addEventListener('click', handleClick )

const xButton = document.querySelector('.tab')

xButton.addEventListener('click', function(){
    console.log('Close Tab!!')
})
