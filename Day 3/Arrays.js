function getSecondLargest(nums) {
    let maiorNum 
    let segundoMaiorNum 

    for (let i = 0; i < nums.length; i++){
        if(nums[i] < maiorNum){
            segundoMaiorNum = maiorNum
            maiorNum = nums[i]
        }else if (nums[i] > segundoMaiorNum && nums[i] !== maiorNum){
            segundoMaiorNum = nums[i]
        }
    }
    return segundoMaiorNum
        
}
