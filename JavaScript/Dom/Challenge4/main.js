// selector all inputs
// attchated onsubmeit event
// e.target.textcont to get e.target.value
// submit form .
// print result


const allInputs = document.querySelectorAll('input')
const form = document.querySelector('form')
console.log('allInput', allInputs)


form.onsubmit =  function handleClick(e){
    e.preventDefault()
    for (const element  of allInputs) {
        console.log('element', element)
        if(element.id === "name"){
            document.querySelector('.result-name').textContent +=  element.value
        } else if (element.id === "job"){
             document.querySelector('.result-job').textContent += element.value
        } else if (element.checked){
            document.querySelector('.result-age').textContent += element.value
        }
        
    }
}