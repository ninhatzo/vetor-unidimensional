function validaProc() {

    // Declarando vetor
    let valor=[];
    let valorDobro = [];
    let contador=0;

    // Alimentando o vetor com dados
    for(let i = 0; i<10;i++) {

        valor[i]=parseInt(prompt("Digite o " +(i+1)+ "º número: "));
        console.log( (i+1)+ "º número informado é: " + valor[i]);
    }

    console.log("")
    console.log("Números ao quadrado:")
    // Conta
    for(let i = 0; i<10;i++) {

        valorDobro[i] = valor[i] * valor[i]
        console.log(valor[i]+ "² = " +valorDobro[i])
     }
    return false;
}