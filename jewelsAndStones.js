//Jewels and Stones #771

var numJewelsInStones = function(J, S) {
    let counter = 0
    for(let i=0; i<S.length; i++){
        if(J.split("").includes(S[i])){
            counter ++
        }
    }
    return counter
};