const green = document.querySelector('.green-border')
const black = document.querySelector('.black-border')

// function onGreen(e){
//     console.log(e.target)
// }
function onBlack(e){
    console.log('e.target', e.target)
    console.log('e.currentTarget', e.currentTarget)

}

// green.addEventListener('click', onGreen)
black.addEventListener('click', onBlack)