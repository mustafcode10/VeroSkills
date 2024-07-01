
const bigOrSmall = new Promise((resolve, reject)=>{
    const randomNumber = Math.random()
    if(randomNumber < 0.5){
        resolve('Yay, small number!' + randomNumber)

    } else {
        reject({
            msg: 'BIG NUMBER!',
            number: randomNumber,
        })
    }

})

console.log(bigOrSmall)
bigOrSmall.then(msg => console.log('I am in then ', msg))
bigOrSmall.catch(rejectObject => console.log(rejectObject))