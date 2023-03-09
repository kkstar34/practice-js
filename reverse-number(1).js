function reverse_number(number){
    let number_str = number + '';  //une maniere simple de convertir un nombre en chaine de caractere sans utilisé de fonction
    let reverse_tab = [];
    for(let i = number_str.length; i >= 0; i--){
        //une boucle ici qui commence à la fin pour aller au debut
        reverse_tab.push(number_str[i]); // ajouter chaque lettre de la fin dans un nouveau tableau
    }
    return reverse_tab.join(''); //convertir ce nouveau tableau en chaine de caratere avec la fonction join
}

console.log(reverse_number(3254)) //4523