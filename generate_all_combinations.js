function generate_combinations(str){
    for(let i=0; i<str.length; i++) {
        for(let j= 1; j < str.length; j++) {
            if(i!=j && j >= i) {
                console.log(str.substr(i, j))
            }
                
        }
       
    }
}

generate_combinations("marie");