const valorConta = 100;

const percentualGorjeta = 5;

function calculo(valorConta, percentualGorjeta) {

    return valorConta * (percentualGorjeta / 100)
}

const valorGorjeta = calculo(valorConta, percentualGorjeta);
const valorTotal = valorConta + valorGorjeta;

console.log("Valor da conta: R$" + valorConta + ", Gorjeta: " + percentualGorjeta + "%, " + "Total a pagar: R$" + valorTotal)