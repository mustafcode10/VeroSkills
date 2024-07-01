const  isGoodAtMath = false
// note that our handleMathSkills function takes in 2 callback functions
function handleMathSkillsCallback(resolvedFunction, rejectedFunction){
    if(isGoodAtMath){
        resolvedFunction({
            msg: 'YAY YOU ARE SO GOOD AT MATH'
        })
    } else {
        rejectedFunction({
            rejectedMsg: 'BOO YOU ARE SO TERRIBLE AT MATH'
        })
    }

}

function resolvedFunction(successObj){
    console.log(successObj.msg + ' CONGRATS!')

}

function rejectedFunction(failureObj){
    console.log(failureObj.rejectedMsg)
}

// handleMathSkillsCallback(resolvedFunction, rejectedFunction)


////////////////////////// some code using promise below ////////////////////////////
function handleMathSkillsPromise(){
    return new Promise((resolve, reject) => {
        if(isGoodAtMath){
            resolve({
                msg: 'YAY YOU ARE SO GOOD AT MATH'
            })
        } else {
            reject({
                rejectedMsg: 'BOO YOU ARE SO TERRIBLE AT MATH'
            })
        }

    })
}
handleMathSkillsPromise().then(successObj => console.log(successObj.msg + ' CONGRATS!'))
handleMathSkillsPromise().catch(failureObj => console.log(failureObj.rejectedMsg + 'GO LEARN MORE!'))