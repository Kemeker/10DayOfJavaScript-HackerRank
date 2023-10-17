function factorial(n){
    if (n === 0 ){
        return 1
    }else{
        let soma = 1 
        for (let i = 1; i <= n; i++){
            soma *= i
        }
    }return soma

}