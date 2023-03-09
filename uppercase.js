
function uppercase(str)
{
  var str_tab = str.split(' '); /* convertir une chaine de caractère en tableau en cassant 
  par les espaces,  le tableau ressemble à ça : ["the", "quick", "brown", "fox"]*/
  var output_tab = [];
  for(let x = 0; x < str_tab.length; x++){
    output_tab.push( str_tab[x][0].toUpperCase() + str_tab[x].slice(1) ); 
    
    /*str_tab[x] represente l'element du tableau à l'index x, 
    par exemple si x = 0, alors  str_tab[x] => "the", 
    si x = 1, alors  str_tab[x] => "quick", 
    premier element du tableau de notre exemple .
    ainsi donc str_tab[x][0] => "t" si x = 0;
    str_tab[x][0] => "q" si x = 1;
    ainsi de suite

    la fonction toUpperCase est une fonction qui s"applique uniquement au chaine de caratere
    elle permet de convertir en majuscule 
    exemple : "t".toUpperCase() => "T"

    enfin str_tab[x].slice(1) => "he" si x = 0;
          str_tab[x].slice(1) => "uick" si x = 1; documentez vous sur la fonction slice(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
        
    par consequent 
    str_tab[x][0].toUpperCase() + str_tab[x].slice(1) => "T" + "he" => "The" si x = 0;
    str_tab[x][0].toUpperCase() + str_tab[x].slice(1) => "Q" + "uick" => "Quick" si x = 1;
    
    
    */
  }
  return output_tab.join(' '); // join permet de convertir le tableau de chaine de caractère en une suite de chaine de caractère separée par des espaces
}
console.log(uppercase("the quick brown fox"));