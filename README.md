# alos-tp1
TP1
etap 1
  Installation node.js![image](https://user-images.githubusercontent.com/98590213/159335675-2807515f-0c89-4216-bee4-795d1b4c7970.png)
  Installation les serveurs![image](https://user-images.githubusercontent.com/98590213/159335733-5491a9e1-7e66-4eb3-ab8a-0a2c36d7f689.png)
    $npm install -g json-server
    $npm install unirest
    
    ![image](https://user-images.githubusercontent.com/98590213/159342496-eea67adb-d3fa-483e-b5aa-2fe77bd5ad41.png)
    
    ![image](https://user-images.githubusercontent.com/98590213/159342587-2a63269a-c438-4547-855d-54ac7d1e8433.png)
    


 etap 2
  sur json generaor on cree note fake api avec 100 enregistrements selon note projet 
etap 3 API avec visuel studio code![image](https://user-images.githubusercontent.com/98590213/159342680-7eca66cc-2ac2-444a-a8d1-75564c6d651e.png)

sur un terminal CMD on cree notre projet sur visuel studio code suivant les etaps suivant
    $mkdir projet-api
    $cd projet api
    $npm init
    code . pour accedé a notre projet avec visuel studio code
    ![image](https://user-images.githubusercontent.com/98590213/159342805-0c81f0d2-f4d3-42c6-b852-8c3ba4cff385.png)


etap 4 sur VS code
  on cree un ficheir json avec notre api et on le renomé db.json
  sur teminal du VS code on lance le serveur json avec  $npm install -g json-server
  pour lancé le package json-server avce la commande suivante:
  $json-server --watch db.json
  on garde db.json comme listing 1 et on cree un fichier JS avec nom de fichier listing 2 avec le code suivant
  
  
   etap 4
  notre api books est sur  http://localhost:3000/books
--------
  const { title } = require("process")
var unirest = require("unirest")

 var req = unirest("GET", "http://localhost:3000/books/")

 req.headers({
 })

 req.end(function (res) {
    if (res.error) throw new Error(res.error)

    console.log(res.body)
})
-------
question 1  
pour afficher les 10 enregistrements on utulise _limit 'http://localhost:3000/books?_limit=10'

question 2
la fonction qui permet de filtrer les ressources de vonotretre API dont le 
nom commence par la lettre M est :
    function title_starts(books, letter)
 {
    return books.filter(title => book.title[0] == letter)}
    console.log(title_starts(res.body, "M"))
    
question 3
Que signifier "cache-control": "no-cache" du Listing 2
  c’est une instruction pour le navigateur qu’il doit revalider avec le serveur à chaque fois avant d’utiliser une version mise en cache de l’URL.
Ceci est utile pour s’assurer que l’authentification est respectée parmi d’autres avantages.

 
 
