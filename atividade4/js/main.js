function validaProc() {

    // Declarando vetor
    let valor=[];
    let valorImpar = [];
    let contador=0;

    // Alimentando o vetor com dados
    for(let i = 0; i<10;i++) {

        valor[i]=parseFloat(prompt("Digite o " +(i)+ "º número: ").replace(",", "."));
        console.log( (i+1)+ "º número informado é: " + valor[i]);
    }

    console.log("")
    console.log("Números ímpares:")

    // Conta
    for(let i = 0; i<10;i++) {

        if (i % 2 !=0) {
            valorImpar[i] = valor[i]
        console.log("Posição "+(i)+ " = " +valorImpar[i])
        }
     }
    return false;
}