// async await

// async function fetchUsers() {
//     //fetch = a primi
//     const result  = await fetch ('https://jsonplaceholder.typicode.com/users')


//     const data = await result.json()
// }

async function fetchUsers() {
    //fetch = a primi
    const result  = await fetch ('http://www.omdbapi.com/?i=tt3896198&apikey=a4162e4')


    const data = await result.json()
}

fetchUsers()

