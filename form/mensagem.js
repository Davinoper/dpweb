function mensagem(){
    var label = document.getElementById('#age');
    label.textContent = "Mensagem enviada!";
    window.setTimeout(function() {
        label.textContent = " ";
    }, 800);
    
    var nome =document.getElementById('name').value;
    var email =document.getElementById('email').value;
    var assunto =document.getElementById('subject').value;
    var mensagem =document.getElementById('message').value; 
    console.log(nome,email,assunto,mensagem);
    var arroba = false;
    var ima = email.indexOf("@"); 
    console.log(ima);

    

    if(nome != "" && email != "" && assunto != "" && mensagem != "")
    {
        if(ima == -1)
        {
            window.alert("Falta do '@' no email!");
            var arroba = false;
        }
        else{
            arroba = true;
        }
        if(arroba == true)
        {
            window.location.href = "mailto:dpwebsolucoes@gmail.com?subject="+assunto+"&body=Nome: "+nome+" , mensagem: "+ mensagem+" , email: "+email;
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('subject').value = "";
            document.getElementById('message').value = "";
            console.log("beleza")
        }
    }
    else{
        window.alert("Campos do formulário vazios!")
        label.textContent = "Falha no envio...";
        window.setTimeout(function() {
            label.textContent = " ";
        }, 1000);
    }
    
}

