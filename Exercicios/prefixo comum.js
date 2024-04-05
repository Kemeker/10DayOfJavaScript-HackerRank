var longestCommonPrefix = function(strs) {
    // caso especial se a matriz for string vazia
    if(strs.length === 0) return ""

    // Inicialize o prefixo comum  com a primeira string
    let prefixo = strs[0]

    // Itere sobre cada caractere da primeira string
    for ( let i = 1; i < strs.length; i++){
        while (strs[i].indexOf(prefixo) !== 0){
            prefixo = prefixo.substring(0, prefixo.length -1 )
            if (prefixo === ""){
                return ""
            }
        }   
    }
    return prefixo
};