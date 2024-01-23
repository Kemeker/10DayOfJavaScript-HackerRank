/*
Objetivo

Neste desafio, praticamos o uso de funções de seta . Verifique o tutorial em anexo para mais detalhes.

Tarefa

Conclua a função no editor. Tem um parâmetro: um array,. Ele deve percorrer o array executando uma das seguintes ações em cada elemento:

Se o elemento for par, multiplique o elemento por 2
Se o elemento for ímpar, multiplique o elemento por 3
A função deve então retornar o array modificado.

Formato de entrada

1 2 3 4 5
*/

function modifyArray(nums) {
    const modifiedArray = []
    
    for (let i = 0; i < nums.length; i++){
        const number = nums[i]
        
        if(number % 2 === 0){
            modifiedArray.push(number *2)
        } else {
            modifiedArray.push(number *3)
        }
    }
    
   return modifiedArray 
    
}