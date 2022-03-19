
/*
var unirest = require("unirest")

 var req = unirest("GET", "http://localhost:3000/books/")

 req.headers({
     
"cache-control": "no-cache",
 })

 req.end(function (res) {
    if (res.error) throw new Error(res.error)
 
        
    console.log(res.body)
    
// filter seulement les clients dont le lastname commence par la lettre M

function title_starts(books, letter)
 {
    return books.filter(book => book.title[0] == letter)}
    console.log(title_starts(res.body, "M"))
})

*/

 async function get() {
     const response = await fetch("http://localhost:3000/books/")
     const data = await response.json();

     console.log(data)

    
     /*
     const print = data.map(m => m.title)
     console.log(print)
     /*function(print)
     
    //  document.querySelector("#content").innerHTML = data[0].name

     function title_starts(books, letter)
     {
        return books.filter(book => book.title[0] == letter) 
        console.log(title_starts(res.body, "M"))
     }*/

 }
 get()
