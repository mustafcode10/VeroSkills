window.setInterval(function(){
    document.querySelector('h2').textContent++
},1000)

// nameField and eventListener
const nameField = document.querySelector('#name')
nameField.addEventListener('input', function(){
    sessionStorage.setItem('userName', nameField.value)
})

// load the  namefield 

document.body.onload = function(){
    if(sessionStorage.length > 1){
        nameField.value =  sessionStorage.getItem('userName')
    }
}

// radio input 

const allInputRadio = document.querySelectorAll('input[type=radio]')
console.log(allInputRadio)

for (const input of allInputRadio) {
  input.oninput = function(){
    if(input.checked){
        console.log(input.value)
    }
  }
    
}

