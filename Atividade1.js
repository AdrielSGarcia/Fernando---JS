var frm = document.querySelector("form");

frm.addEventListener("submit", (e) => { //Utiliza da variável recém criada e escuta tudo que for puxado de um submit dentro dela.
    e.preventDefault(); //Previne que o submit realize a atualização da página.
    let vetor = [];

    vetor[0] = Number(frm.n1.value);
    vetor[1] = Number(frm.n2.value);
    vetor[2] = Number(frm.n3.value);
    vetor[3] = Number(frm.n4.value);
    vetor[4] = Number(frm.n5.value);
    vetor[5] = Number(frm.n6.value);
    vetor[6] = Number(frm.n7.value);
    vetor[7] = Number(frm.n8.value);
    vetor[8] = Number(frm.n9.value);
    vetor[9] = Number(frm.n10.value);
    let n = 0;
    
    while(n < vetor.length){
        if(vetor[n]%2==0){
            document.write(vetor[n] + " ");
        }
        n++;
    }

    });