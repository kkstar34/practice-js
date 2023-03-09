/* cet exercice se base sur le processus de renversement des chaines de carateres
    comme dans l'exercice precedent
*/

function isPalindrome(str){
    let reverse_tab = [];
    //une boucle ici qui commence à la fin pour aller au debut
    for(let i = str.length; i >= 0; i--){
        reverse_tab.push(str[i]); // ajouter chaque lettre de la fin dans un nouveau tableau
    }
    let reverse_str = reverse_tab.join(''); //convertir ce nouveau tableau en chaine de caratere avec la fonction join
    //comparer si la chaine en entrée est egale à la son envers
    if(reverse_str === str) {
        return true;
    }
    return false;
}
console.log(isPalindrome("madam"));// true

/*on peut utiliser la fonction anterieure dans cet exercice, ça raccourcirait grandement le code ici, 
mais on verra ça en presentiel*/