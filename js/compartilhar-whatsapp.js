function whatsApp()
{
    var endereco;
    var texto="Olá quero agendar uma aula de violão, vim do site e fico no aguardo!";
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
    
    whatsApp();
    
});