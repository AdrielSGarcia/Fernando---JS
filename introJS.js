//Criar referências aos elementos que quero manipular

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//console.log(frm);
//console.log(resp);

/*frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do formulário
    //alert("Você clicou no botão");
    const nome = frm.inNome.value;
    resp.innerText = `Olá ${nome}`;
});*/

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do formulário
    //alert("Você clicou no botão");
    const nota1 = Number(frm.n1.value);
    const nota2 = Number(frm.n2.value);
    const nota3 = Number(frm.n3.value);
    const nota4 = Number(frm.n4.value);
    const soma = nota1+nota2+nota3+nota4;
    const media = soma/4;
    
    resp.innerText = `Soma = ${soma} e Média = ${media}`;
});