function validaProc() {

    // Declarando vetor
    let nota=[];
    let notasMaiores = [];
    let contador=0;

    // Alimentando o vetor com dados
    for(let i = 0; i<3;i++) {

        nota[i]=parseFloat(prompt("Digite a " +(i+1)+ "ª nota: ").replace(",", "."));
        console.log("A nota informada na posição " +(i+1)+ " é: " + nota[i]);

    // Retirando notas iguais ou maiores que 7,5
    if (nota[i] >= 7.5) {
        contador++;
        notasMaiores.push(nota[i]);
    }
    }

    // Alerta da quantidade de pessoas com nota igual ou superior a 7,5
    alert( contador+ " pessoas tiraram nota superior ou igual a 7,5");

    // Mostrando notas iguais ou superiores a 7,5
        console.log("");
        console.log("Notas iguais ou superiores a 7,5:");

    for (let i = 0; i < notasMaiores.length; i++) {
            console.log(notasMaiores[i]);
        }
        console.log("A quantidade de notas iguais ou superiores a 7,5 é: " +contador)
    return false;
}