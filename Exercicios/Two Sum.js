/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    const dicionario = [] // dicionario para mapear os numeros
    for(let i = 0; i < nums.length; i++ ){
        const numero = nums[i]
        
        // calcula o complemento para alcançar target
        const complemento = target - numero
        if(complemento in dicionario){
            
            // se o complemento esta no objeto retorna i
            return [dicionario[complemento], i]
        }

        //senao adiciona o numero atual ao objeto
        dicionario[numero] = i

    }

    
};