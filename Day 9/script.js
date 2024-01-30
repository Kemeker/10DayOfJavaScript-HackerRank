let entradaAtual = '';
let operadorAtual = '';
let valorGuardado = 0;

function binarioParaDecimal(binario) {
    let decimal = 0;
    let length = binario.length;

    for (let i = 0; i < length; i++) {
        decimal += parseInt(binario[length - 1 - i]) * Math.pow(2, i);
    }

    return decimal;
}

function decimalParaBinario(decimal) {
    return (decimal >>> 0).toString(2);
}

function Display(value) {
    entradaAtual += value;
    document.getElementById('display').value = entradaAtual;
}

function Clear() {
    entradaAtual = '';
    operadorAtual = '';
    valorGuardado = 0;
    document.getElementById('display').value = '';
}

function Calcular(operator) {
    if (operadorAtual !== '' && entradaAtual !== '') {
        const valorAtualDecimal = binarioParaDecimal(entradaAtual);

        switch (operadorAtual) {
            case '+':
                valorGuardado += valorAtualDecimal;
                break;
            case '-':
                valorGuardado -= valorAtualDecimal;
                break;
            case '*':
                valorGuardado *= valorAtualDecimal;
                break;
            case '/':
                if (valorAtualDecimal !== 0) {
                    valorGuardado = Math.floor(valorGuardado / valorAtualDecimal);
                } else {
                    alert("Não é possível dividir por zero!");
                    Clear();
                    return;
                }
                break;
        }

        document.getElementById('display').value = decimalParaBinario(valorGuardado);
        entradaAtual = '';
    } else {
        valorGuardado = binarioParaDecimal(entradaAtual);
        entradaAtual = '';
    }

    if (operator === '=') {
        operadorAtual = '';
    } else {
        operadorAtual = operator;
    }
}



