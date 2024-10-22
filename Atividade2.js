var frm = document.querySelector("form");

frm.addEventListener("submit", (e) => { //Utiliza da variável recém criada e escuta tudo que for puxado de um submit dentro dela.
    e.preventDefault(); //Previne que o submit realize a atualização da página.


    
    let countdown = Number(frm.countdown.value);

    if(countdown < 10){
        document.write("Valor inserido menor que 10!");
    }else{
    while(countdown >= 10){
        if(countdown == 10){
            document.write(countdown + ".");
        }else{
            document.write(countdown + ", ");
        }
        countdown--;
    }
}

    });