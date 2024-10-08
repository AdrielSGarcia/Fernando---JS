//Criar referências aos elementos que queremos manipular

var frm = document.querySelector("form");
var resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    var nome = frm.inNome.value;
    resp.innerText = `Olá ${nome}!`;
});

//Crie um programa que recebe o nome do aluno, 4 notas

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNome.value;
    const nota1 = Number(frm.n1.value);
    const nota2 = Number(frm.n2.value);
    const nota3 = Number(frm.n3.value);
    const nota4 = Number(frm.n4.value);
    const soma = nota1+nota2+nota3+nota4;
    const media = soma/4;
    
    resp.innerText = `Olá ${nome}!, Soma = ${soma} e Média = ${media}`;
});