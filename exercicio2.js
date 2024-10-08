var frm = document.querySelector("form"); //Variável que puxa o valor de um form.
var resp = document.querySelector("h3"); //Variável que puxa valor de um h3.

frm.addEventListener("submit", (e) => { //Utiliza da variável recém criada e escuta tudo que for puxado de um submit dentro dela.
    e.preventDefault(); //Previne que o submit realize a atualização da página.
    var nome = frm.inNome.value; //Puxa o valor do id InNome para a variável nome.
    var n1 = Number(frm.inNota1.value); // Puxa o valor de InNota1 para a variável n1.
    var n2 = Number(frm.inNota2.value); // Puxa o valor de InNota2 para a variável n2.
    var n3 = Number(frm.inNota3.value); // Puxa o valor de InNota3 para a variável n3.
    var n4 = Number(frm.inNota4.value); // Puxa o valor de InNota4 para a variável n4.
    var media = (n1+n2+n3+n4)/4; //Executa cálculo de média na variável com base nos 4 valores de nota criados anteriormente

    if(media >= 7){
        resp.style.color = "blue";
        resp.innerText = `Olá ${nome}! - Suas notas resultam na seguinte média: ${media.toFixed(2)}, e felizmente você foi aprovado! :D`;
    }else if(media <= 6.9 && media >= 4){
        resp.style.color = "green";
        resp.innerText = `Olá ${nome}! - Suas notas resultam na seguinte média: ${media.toFixed(2)}, e infelizmente você foi para recuperação..`;
    }else if(media <= 3.9){
        resp.style.color = "red";
        resp.innerText = `Olá ${nome}! - Suas notas resultam na seguinte média: ${media.toFixed(2)}, e você foi reprovado! :(`;
    }
    
    
    //Estrutura condicional utilizada para mediar os resultados baseado em valores definidos

});