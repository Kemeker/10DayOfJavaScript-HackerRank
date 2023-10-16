function vowelsAndConsonants(s) {
    var vowels = ''
    var consonants = ''

    for (var i = 0; i < s.length; ++i){
        var char = s[i].toLowerCase()

    }
    

    
}
            
function diagonalDifference(arr) {
    const matriz = arr;
    const tamanho = matriz.length;
    let somaDiagonalPrincipal = 0;
    let somaDiagonalSecundaria = 0;
  
    for (let i = 0; i < tamanho; i++) {
      // Soma dos elementos da diagonal principal
      somaDiagonalPrincipal += matriz[i][i];
  
      // Soma dos elementos da diagonal secundária
      somaDiagonalSecundaria += matriz[i][tamanho - 1 - i];
    }
  
    const diferenca = Math.abs(somaDiagonalPrincipal - somaDiagonalSecundaria);
    console.log(diferenca);
  }
  
  // Exemplo de uso com a matriz fornecida
  const matriz = [
    [3],
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
  ];
  
  diagonalDifference(matriz);
  