console.log('debug app -- console n\'est pas de javascript, il est geré par l\'env');

var lavariable = 100;

function laFonction(){
    console.log('call de la fonction');
    //return; // Si return n'est pas declaré il return 'undefined'
}

console.log('ret : ' + laFonction());

var fct = function () {
    console.log('call fonction anonyme'); //comme lambda expression
};

console.debug('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
fct();//opérateur execution()
fct = laFonction; //comme le pointeur de fonction en c++
fct();
fct(100);//haha en javascript les parametres ne sont pas controllé

function laFonctionDeux(p1, p2){ //alors ils ne sont pas typés  
    console.log(p1 + ' ' + p2 );
    console.log(arguments); //passé par la fonction
}

laFonctionDeux();
laFonctionDeux('un');
laFonctionDeux('un', 'deux');
laFonctionDeux('un', 'deux', 'trois');

var monObj = {
    nom: 'toto',
    prenom: 'titi',
    affichage: function(){
        console.log(this.nom + ' ' + this.prenom); //this est un faux ami, il peut être le contexte
    }
};


monObj.affichage();

//une convention
function  LaClass(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
    /*this.affichage = function() {
        console.log('Called by class: '+this.nom + ' ' + this.prenom);
    };*/
    var me = this; 
    this.affichage = function() {
        console.log('Called by instance: '+me.nom + ' ' + me.prenom);//closure
        LaClass.prototype.affichage.apply(me);
    };
 }

LaClass.prototype.affichage = function() {
    console.log('Called by prototype: '+this.nom + ' ' + this.prenom);
};
console.log("*******************");
var monInstance = new LaClass('zzz', 'eeeee');
monInstance.affichage();
console.log("*******************");
monObj.affichage();


var fs = require('fs');//node chargement lib file system

//écrire dans un fichire en mode asynchrone (date et heure)
fs.writeFile("lefichier.txt",
            new Date().toISOString(), monInstance.affichage); //this ne marche pas
