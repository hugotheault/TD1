//Jeu du Shifumi
const MAX = 3;
let bouton1 = document.getElementById('b1');
let bouton2 = document.getElementById('b2');
let bouton3 = document.getElementById('b3');
let joueur = "";
let robotChar = "";
let robotInt = 0;
bouton1.addEventListener('click', ()=>{
    let robotInt = Math.floor(Math.random()*MAX)
    joueur = "Pierre"
    console.log(robotInt);
});
bouton2.addEventListener('click', ()=>{
    let robotInt = Math.floor(Math.random()*MAX)
    joueur = "Feuille"
    console.log(robotInt);
});
bouton3.addEventListener('click', ()=>{
    let robotInt = Math.floor(Math.random()*MAX)
    joueur = "Ciseaux"
    console.log(robotInt);
});
//robotInt == 0 ? (robotChar = "Pierre") : robotInt == 1 ? console.log("Feuille") : console.log("Ciseaux");


//-------------------------------------------VAGUE 1-----------------------------------------------------------------------------------------------------------//

// //Exercice 1
// let tempCelcius = window.prompt();
// document.writeln(tempCelcius+"C");
// let tempFar = tempCelcius * 9 / 5 + 32;
// document.writeln(tempFar+"Far");

// //Exercice 2
// let cote1 = window.prompt("longueur:");
// let cote2 = window.prompt("largeur:");
// document.write(cote1*cote2);

// //Ecercice 3
// let prenom = window.prompt("prenom");
// let nom = window.prompt("nom");
// document.write(prenom+" "+nom);

// //Exercice 4
// let HT = window.prompt("donner la valeur hors taxes du produit: ");
// const TVA = 1.2;
// let TTC = HT * TVA;
// document.write("cout produit hors taxes: "+HT);
// document.write("montant de la TVA: "+TVA);
// document.write("cout produit TTC: "+TTC);

// //Exercice 5
// let x = 0;
// ((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true) ? x = 1 : x = -1;
// document.write(x);

// //Exercice 6
// let masse = window.prompt("indiquez votre poids: ");
// let taille = window.prompt("indiquez voter taille: ");
// let IMC = masse / (taille*taille);
// document.write(IMC.toFixed(2));

// //Exercice 7
// const mini = 50;
// let total = window.prompt("entrez le montant total de votre commande: ");
// total >= mini ? document.write("Livraison gratuite!") : document.write("Frais de livraison = 8.99€");

// //Exercice 8
// let binary = window.prompt("indiquer un nombre en binaire: ");
// let decimal = parseInt(binary,2);
// document.write(binary+" "+decimal);


//-------------------------------------------VAGUE 2--------------------------------------------------------------------------------------------------------------------//

// //Exercice 1
// const personne = {
//     nom: "theault",
//     prenom: "hugo",
//     age: 19,
//     ville: "Caen",
// };
// console.log(personne.prenom);
// console.log(personne.nom);
// console.log(personne.age);
// console.log(personne.ville);

// //Exercice 2
// const personnes = [
//     {prenom: "John", nom: "Doe", age: 25, ville: "Rouen"},
//     {prenom: "Jane", nom: "Doe", age: 30, ville: "Paris"},
//     {prenom: "Jim", nom: "Doe", age: 35, ville: "Caen"} 
// ];
// console.table(personnes);
// console.log("--------------");
// console.log(personnes[0]);
// console.log(personnes[1]);
// console.log(personnes[2]);

// //Exercice 3 (besoins du 2)
// personnes.push({prenom: " Marc", nom: "Doe", age: 32, ville: "Marseille"});
// console.table(personnes);

// //Exercice 4 (besoins du 2)
// personnes[0].prenom = "Jean";
// personnes.splice(1,1);
// console.table(personnes);

// //Exercice 5
// const nb = [0,1,2,3,4,5,6,7,8,9,10];
// console.log(nb[0]);
// console.log(nb[nb.length-1]);
// console.log(nb.length);

// //Exercice 6
// const dixEnDix = [10,20,30,40,50,60,70,80,90,100];
// console.log(dixEnDix);
// dixEnDix.reverse();
// console.log(dixEnDix);

// //Exercice 7
// const numbers = [ 2, 5, 1, 9, 0, 3, 7, 4, 6, 8 ];
// console.log(numbers);
// numbers.sort();
// console.log(numbers);

// //Exercice 8 (besoins du 7)
// numbers.push(11);
// console.log(numbers);
// numbers.unshift(0);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);

