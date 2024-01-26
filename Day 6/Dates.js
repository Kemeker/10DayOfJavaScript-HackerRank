/*Objetivo

Neste desafio, aprendemos sobre JavaScript Dates . Confira o tutorial em anexo para mais detalhes.

Tarefa

Dada uma string de data,, no formato MM/DD/YYYY, encontre e retorne o nome do dia dessa data. Cada nome de dia deve ser uma das seguintes strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, ou Saturday. Por exemplo, o nome do dia para a data 12/07/2016é Wednesday.

Formato de entrada

O código stub bloqueado no editor lê a seguinte entrada do stdin:
A primeira linha contém um número inteiro,, denotando o número de datas a serem verificadas.
Cada linhadoas linhas subsequentes contêm uma data no MM/DD/YYYYformato; cada data denota algumque é passado para a função.

Restrições

É garantido que a entrada consiste apenas em datas válidas.
Formato de saída

A função deve retornar uma string denotando o dia da semana correspondente à data indicada por.

Exemplo de entrada 0

2 
11/10/2009 
10/11/2010
Exemplo de saída 0

domingo 
quarta-feira
Explicação 0
*/


function getDayName(dateString) {
    let dayName = new Date(dateString)
    return dayName.toLocaleString("en-US", {weekday: 'long'})
}