/*A empresa “SÓ CALCULO SEM PRECONCEITO” necessita agora de uma solução 
que alimente um vetor com 5 valores inteiros e também que solicite ao usuário a 
entrada de dados de um valor inteiro, após as devidas entradas de dados o programa 
deve multiplicar o valor informado pelo usuário por cada elemento do vetor sendo que 
o resultado deste cálculo deve ser armazenado em outro vetor, em suas respectivas 
posições. Como resultado deseja-se a impressão dos valores dos resultados dos 
cálculos, armazenados no segundo vetor.
 */

function validaProc() {

    // Declarando vetor
    let valor=[];
    let valor2;
    let resultado=[];

    // Alimentando o vetor com dados
    for(let i = 0; i<5;i++) {

        valor[i]=parseInt(prompt("Digite o " +(i+1)+ "º valor: "));
        console.log( (i+1)+"º valor informado: " + valor[i]);
    }

    console.log(" ")

    valor2=parseInt(prompt("Digite um valor a ser multiplicado: "));
    console.log("Valor informado a ser multiplicado: " + valor2);

    console.log("")

    for(let i = 0; i<5;i++) {

    // Conta
    resultado[i] = (valor[i] * valor2)

    // Resultado
    console.log("Resultado: " +valor[i]+ " * " +valor2+ " = " +resultado[i])
}
console.log("")
    return false;

}