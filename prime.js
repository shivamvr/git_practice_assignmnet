
function prime(n){
    if(n<=1){
     return false
    }
    for(var i=2; i<n**0.5; i++){
        if(n%i==0){
            return false
        }
    }
    return true
}

console.log(prime(4))