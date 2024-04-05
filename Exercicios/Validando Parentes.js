function isValid(s){
    // criar uma pilha
    let pilha = []

    // Um objeto para mapear os colchetes fechados ao seu correspondente aberto
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    // itera para cada caractere na string 
    for(let i = 0; i < s.length; i++){
        let caracter = s[i]

        // verificar se o caracter atual é um colchete fechado
        if(map[caracter]){
            // topo da pilha ( ou um valor duummy '#' para evitar erro a pilha estar vazia)
            let topoPilha = pilha.length === 0 ? '#' : pilha.pop()

            // se o topo da pilha nao e o colchete aberto correspondente, retorna falso
            if(topoPilha !== map[caracter]){
                return false
            }
        }else{
            // se nao, e um colchete aberto, entao adiciona a pilha
            pilha.push(caracter)
        }
    }
    return pilha.length === 0
}