
// Encapsulation -> Protection of Private properties method from user manipulation.
// Encapsulation means to protect properties and methods from unwanted outside user manipulation
const bankMoney = 1

function totalMoney (){
    const bankMoney = 3000
    const walletMoney = 10
    return `your total is ${bankMoney + walletMoney}`
}

console.log(totalMoney())
