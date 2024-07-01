// challeng: Create an async function that takes 1 argument (userId) and return a promise holding an object
// that contains the postNumber(first, second, third...) and that post's content aka body
// use https://jsonplaceholder.typicode.com/posts
// example of result: [{postNumber: 1, content: 'pizza is good'},{postNumber: 2, content: 'Dont be LAZY'},  ]

// BONUS: what we got back was our desired result, but its is wrapped in a promise, so we  cant render it on our HTML
// how can we store that result in global variable instead so we can work with it.

let result = null
 async function getUserPosts(userID){
    const arrayHolder = []
    let postCount = 1
    const fetchResult = await fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(res => res.json())
                        .then(arrayOfPosts => {
                            arrayOfPosts.filter(post => {
                                if(post.userId === userID){
                                    arrayHolder.push({postNumber: postCount, content: post.body, selectUserID: post.userId})
                                }
                            })
                        })
                        // console.log(arrayHolder)
                        return arrayHolder;

 }

// BONUS: what we got back was our desired result, but its is wrapped in a promise, so we  cant render it on our HTML
// how can we store that result in global variable instead so we can work with it.
getUserPosts(2).then(data => {
    result = data
    // console.log(result)
    for( const value of result){
        console.log(result)

    }
})
