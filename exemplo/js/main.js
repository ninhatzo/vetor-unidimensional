function validaProc() {
    
    // Declarando a variável conrtoladora i
    let i;

    // Declarando vetor
    let num=[];

    // Alimentando o vetor com dados
    for(i = 0; i<3;i++) {

        num[i]=parseInt(prompt("Digite um número"))
    }

    // Retirando os valores de cada posição do vetor
    for(i = 0; i<3;i++) {

        console.log("O valor do vetor num na posição " + (i+1) + " é: " +num[i]);
        alert("O número " +(num[i])+ " foi colocado na posição " +(i+1));
    }
    return false;
}