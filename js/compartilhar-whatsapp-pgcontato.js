function whatsApp(Nome,Numero)
{
    var endereco;
    var texto="Olá, sou #NOME#, meu número é o #NUMERO# e, quero agendar uma aula de violão, vim do site e fico no aguardo!";
    texto=texto.replace('#NOME#',Nome);
    texto=texto.replace('#NUMERO#',Numero);


    var telefone="5551995738976";

    if($.isMobile)
    {
        endereco="whatsapp://send?phone="+telefone+"&text="+texto
    }
    else
    {
        endereco="https://api.whatsapp.com/send?phone="+telefone+"&text="+texto
    }
    
    console.log("Enviando msg para: "+endereco);
    
    window.open(endereco);
}

$('#agendar').click( function() {
    var Nome = $('#Nome').val();
    var Numero = $('#Whatsapp').val();
    whatsApp(Nome,Numero);
    
});