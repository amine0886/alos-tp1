# alos-tp1
TP1
etap 1
  Installation node.js![image](https://user-images.githubusercontent.com/98590213/159335675-2807515f-0c89-4216-bee4-795d1b4c7970.png)
  Installation les serveurs![image](https://user-images.githubusercontent.com/98590213/159335733-5491a9e1-7e66-4eb3-ab8a-0a2c36d7f689.png)
    $npm install -g json-server
    $npm install unirest
 etap 2
  sur json generaor on cree note fake api avec 100 enregistrements selon note projet 
etap 3
sur un terminal CMD on cree notre projet sur visuel studio code suivant les etaps suivant
    $mkdir projet-api
    $cd projet api
    $npm init
    code . pour accedé a notre projet avec visuel studio code

etap 4 sur VS code
  on cree un ficheir json avec notre api et on le renomé db.json
  sur teminal du VS code on lance le serveur json avec  $npm install -g json-server
  pour lancé le package json-server avce la commande suivante:
  $json-server --watch db.json
   etap 4
  notre api books est sur  http://localhost:3000/books 
  
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

 
 
