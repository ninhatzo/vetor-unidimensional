/*Um professor do SENAI gostaria de uma aplicação que fizesse o cálculo da média de 
seus 5 (cinco) alunos no bimestre. Como o bimestre é composto por 2 (duas) notas, 
crie 2 (dois) vetores para armazenar cada uma das notas dos alunos. Depois, crie 
outro vetor com o resultado da média dos alunos, seguindo a seguinte fórmula:

Média da Nota[1] = (Nota do vetor A[1] + Nota do vetor B[1]) / 2 */

function validaProc() {

    // Declarando vetor
    let nota1=[];
    let nota2=[];
    let media = [];

    // Alimentando o vetor com dados
    for(let i = 0; i<5;i++) {

        nota1[i]=parseFloat(prompt("Digite a primeira nota do " +(i+1)+ "º aluno: ").replace(",", "."));
        console.log( "Primeira nota do "+(i+1)+"º aluno informado é: " + nota1[i]);
    }

    console.log("")

    for(let i = 0; i<5;i++) {
        nota2[i]=parseFloat(prompt("Digite a segunda nota do " +(i+1)+ "º aluno: ").replace(",", "."));
        console.log( "Segunda nota do "+(i+1)+"º aluno informado é: " + nota2[i]);
    }

    console.log("")

    for(let i = 0; i<5;i++) {
        
    // Conta
    media[i] = (nota1[i] + nota2[i]) / 2

    // Resultados
    console.log("Média do " +(i+1)+ "º aluno: ", media[i].toFixed(2))
    }

    return false;
}