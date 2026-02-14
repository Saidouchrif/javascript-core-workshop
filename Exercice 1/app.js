//Partie 1
//1. Créer 5 objets produit avec des valeurs réalistes (prix et stock différents).
//2. Regrouper ces produits dans un tableau produits.
const produit=[
    {id:1,nom:"telephone",categorie:"informatique",prix:2000,stock:10},
    {id:2,nom:"pc",categorie:"informatique",prix:5400,stock:17},
    {id:3,nom:"souris",categorie:"informatique",prix:100,stock:100},
    {id:4,nom:"server",categorie:"informatique",prix:5000,stock:0},
    {id:5,nom:"RAM 16G",categorie:"informatique",prix:400,stock:100},
]
//3. Afficher dans la console la liste des produits sous la forme :o Nom - Catégorie - Prix DH - Stock
produit.forEach((e)=>console.log(e.nom+' -- '+e.categorie+" -- "+e.prix+" DH"+" -- "+e.stock))
//Partie B
//4. Afficher uniquement les produits dont le stock est égal à 0 (produits en rupture).
console.log("Produits en rupture de stock :")
produit.filter((e)=>{
    if(e.stock===0){
        console.log(e.nom+' '+'stock est : '+e.stock)
    }
})
// 5. Afficher uniquement les produits dont le prix est supérieur à 500 DH.
console.log("les produits dont le prix est supérieur à 500 DH.")
produit.filter((e)=>{
    if(e.prix>=500){
        console.log(e.nom+' '+'stock est : '+e.stock+" "+ "Le prix est : "+e.prix)
    }
})
/// solution au niveau de fichier index.html
let categorie_name=prompt('Entre la categoire pour filtre les produit');
console.log('les produits de votre categorie ',categorie_name)
produit.forEach((e)=>{
    if(e.categorie===categorie_name){
        console.log(e.nom)
    }
})
///Partie C — Calculs
/// 7. Calculer et afficher :
//le nombre total de produits
console.log("le nombre de produits c'est :")
console.log(produit.length)
//la valeur totale du stock de la boutique (somme de prix * stock pour chaque produit)
console.log("la valeur totale du stock de la boutique")
const valeurTotaleStock=produit.reduce((total,e)=>total+(e.prix*e.stock),0)
console.log('Valeur total du stock :',valeurTotaleStock,"DH")
// le produit le moins cher
console.log('le produit le mois cher cest :')
let produitmois=produit[0]
let produitplus=produit[0]
produit.forEach((e)=>{
    if(e.prix < produitmois.prix){
        produitmois=e
    }
    if(e.prix > produitplus.prix){
        produitplus=e
    }
    
});
console.log('le produit mois cher :' ,produitmois.nom,' et le prix cest :',produitmois.prix);
console.log('le produit plus cher :' ,produitplus.nom,' et le prix cest :',produitplus.prix);

