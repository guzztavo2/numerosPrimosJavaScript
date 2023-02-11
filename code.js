do {
    var valorRecebido = Number.parseInt(receberValor());
} while (Number.isInteger(valorRecebido) == false);

let promise = new Promise(resultado => {
    let arrayList = construirArray(valorRecebido);
    let resultadoArray = arrayList.filter((value) => {
        if (value >= 2 && verificarNumeroPrimo(value) === true)
            return value;
    })

    let result = [];
    result.push(resultadoArray);
    result.push(arrayList);
    resultado(result);
}).then(resultado => {
    console.log('O seguinte array foi criado para simular os valores que foram pedidos:')
    console.log(resultado[1]);
    console.log('Os mesmo array, entretanto somente com números primos:');
    console.log(resultado[0]);
})

function construirArray(valorContrucao) {
    return arrayList = Array(valorContrucao).fill().map((_, index, array) => {
        return index;
    });
}
function receberValor() {
    let valor = prompt('Digite até qual número você gostaria de identificar os números primos: \nPara visualizar os resultados, acesse o console do navegador.');
    return valor;
}

function verificarNumeroPrimo(numero) {
    numero = Number.parseInt(numero)
    if (Number.isNaN(numero))
        throw new Error('O valor tem de ser do tipo Number. (Inteiro), valores float e/ou double serão transformados em inteiro!');
    let inicio = 2;
    for (inicio; inicio < numero; inicio++)
        if (numero % inicio === 0)
            return false;

    return true;
}
