const contenantchoixOrdinateur = document.getElementById("choix-ordinateur");
const contenantchoixUtilisateur = document.getElementById("choix-utilisateur");
const contenantresultat = document.getElementById("results");

const choixPossibes = document.querySelectorAll('button');
let choixUtilisateur;
let result;
let choixOrdinateur;
choixPossibes.forEach(choixPossible => choixPossible.addEventListener('click',(e)=>{
    choixUtilisateur = e.target.id

contenantchoixUtilisateur.innerHTML= `<img src="${choixUtilisateur}.png">`
generer_choix_ordinateur();
verification();
}))
function generer_choix_ordinateur(){
   random = Math.floor(Math.random() * 3) +1 //genere des nombres compris entre 1 et 3
   
   if(random === 1){
    choixOrdinateur = "pierre"
   }
   if(random === 2){
    choixOrdinateur = "papier"
   }
   if(random === 3){
    choixOrdinateur = "ciseaux"
   }
   contenantchoixOrdinateur.innerHTML= `<img src="${choixOrdinateur}.png">`


}
//fonction pour vérifier si le joueur a gagné ou pas
function verification(){


    //les cas ou le joueur perd
     if(choixUtilisateur == choixOrdinateur){
        result = "Egalité"
     }
     if(choixUtilisateur == "pierre" && choixOrdinateur == "papier"){
        result = "perdu !";
     }
     if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux"){
        result = "perdu !";
     }
     if(choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre"){
        result = "perdu !";
     }


     //les cas ou le joueur gagne
     if(choixUtilisateur == "ciseaux" && choixOrdinateur == "papier"){
        result = "gagné !";
     }
     if(choixUtilisateur == "papier" && choixOrdinateur == "pierre"){
        result = "gagné !";
     }
     if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux"){
        result = "perdu !";
     }
     contenantresultat.innerHTML = result
}