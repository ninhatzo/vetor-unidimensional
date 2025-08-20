/*A empresa “ORDEM DECRESCENTE” necessita de uma solução que alimente um 
vetor com 4 valores numéricos inteiros. Como resultado deseja-se que imprima os 
valores na ordem inversa com que foram armazenadas, ou seja, do valor localizado 
na última posição para o valor localizado na primeira posição do vetor */

function validaProc() {

    // Declarando vetor
    let valor=[];

    // Alimentando o vetor com dados
    for(let i = 0; i<4;i++) {

        valor[i]=parseInt(prompt("Digite o " +(i+1)+ "º valor: "));
        console.log( (i+1)+"º valor informado: " + valor[i]);
    }

    console.log("")

    for(let i = 3; i >= 0; i--) {

    // Resultado
    console.log( (i+1)+ "º valor: " +valor[i]);
}
console.log("")
    return false;

}