// Js addEventListener
const element = document.querySelector('section')

// function handleClick(e){

//     const result = document.querySelector('div')
//     console.log(e.target.textContent)
//     if(e.target.textContent.includes('+')){
//        console.log(result.textContent++)
//     } else {
//         console.log(e.target.textContent)
//         console.log(result.textContent--)
//     }
// }
// element.addEventListener('click', handleClick)

// Html onClick
function handleClickHtml(e){
    const result = document.querySelector('div')
    if(e.target.textContent === '+'){
        result.textContent++

    } else {
       result.textContent--
    }

}



