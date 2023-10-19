// Convertendo numeros usando metodos parseInt e parseFloat, concatenando e somando 


function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    const ConversaoSecondInteger = parseInt(secondInteger)
    console.log(ConversaoSecondInteger + firstInteger)
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    const ConversaoSecondDecimal = parseFloat(secondDecimal)
    console.log(ConversaoSecondDecimal + firstDecimal)
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    console.log(firstString + secondString)
    


  
}

