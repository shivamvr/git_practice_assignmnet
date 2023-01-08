
function palindrome(str){
    str = str+''
    var s = 0
    var e = str.length-1

    while(s<e){
        if(str[s]!=str[e]){
            return true
        }
        s++
        e--
    }
    return true
}
console.log(palindrome(123321))