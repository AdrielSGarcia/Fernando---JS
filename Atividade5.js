var frm = document.querySelector("form");

frm.addEventListener("submit", (e) => { 
    e.preventDefault(); 
    let vetor = [];
    vetor[0] = Number(frm.inNota1.value); 
    vetor[1] = Number(frm.inNota2.value); 
    vetor[2] = Number(frm.inNota3.value); 
    vetor[3] = Number(frm.inNota4.value); 
    vetor[4] = Number(frm.inNota4.value); 
    let n = 0;
    let soma = 0;

    while(n < vetor.length){
        soma = soma + vetor[n];
        n++;
    }

    let media = Number(soma/5);

    if(media >= 7){
        document.write("Olá! - Suas notas resultam na seguinte média: " + media.toFixed(2) + " , e felizmente você foi aprovado! :D");
    }else{
        document.write("Olá! - Suas notas resultam na seguinte média: " + media.toFixed(2) + " , e você foi reprovado! :(");
    }

});