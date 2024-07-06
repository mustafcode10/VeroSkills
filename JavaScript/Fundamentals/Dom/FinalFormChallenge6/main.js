setInterval(function(){
    document.querySelector('h2').textContent++
},1000)




// get all input, loop and eventlistener setItem into localstirage and getItem

 const textInputs = document.querySelectorAll('input[type=text]')
 const radioInputs = document.querySelectorAll('input[type=radio]')

 const nameField =  document.querySelector('#name')
 const jobField = document.querySelector('#job')
 

 function handleTextInput(e){
    if(e.target.previousElementSibling.textContent.includes("Name:")){
        sessionStorage.setItem('name', e.target.value)
    } else {
        sessionStorage.setItem('job', e.target.value)
    }
  
 }

 for (const textInput of textInputs) {
    // console.log(textInput)
    textInput.oninput =  handleTextInput  
 }

 function handleRadioInput(e){
    for (let i = 0; i < radioInputs.length; i++) {
        const element = radioInputs[i];
        if(radioInputs[i].checked){
            console.log('radioInputs', radioInputs[i] )
         sessionStorage.setItem('index', i)
        }
        
    }

 }

 for (const radioInput of radioInputs) {
    radioInput.onchange = handleRadioInput
    
 }

//  const colors = document.querySelector('#colors')
 
//  console.log('colors', colors)
 
//  function handleColorChange(e){
//    const selectedValue = colors.value
//    sessionStorage.setItem('selectedOption', selectedValue)
//  }

//  colors.addEventListener('change', handleColorChange)

  const selectInput = document.querySelector('select')
  const allOptions = document.querySelectorAll('option')
  console.log('option', allOptions)



  selectInput.onchange = ( function(e){
    for (let i = 0; i < allOptions.length; i++) {
        console.log(allOptions[i].value === e.target.value)
        if(allOptions[i].value === e.target.value){
           sessionStorage.setItem('colorIndex', i)
           break;
        }    
    }

  })




 document.body.onload = function(){
    if(sessionStorage.length > 1){
     nameField.value = sessionStorage.getItem('name')
     jobField.value = sessionStorage.getItem('job')
     radioInputs[sessionStorage.getItem('index')].checked = true
    //  colors.value =  sessionStorage.getItem('selectedOption')
    allOptions[sessionStorage.getItem('colorIndex')].selected = true
    }
 }




   
    


