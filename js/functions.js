function salvar(){
    let nome = document.getElementById('nome').value
    let dt = document.getElementById('dt').value
    let email = document.getElementById('email').value
    let tel = document.getElementById('tel').value
    if (nome == ""){
    alert("Insira o nome!")
   }if(dt == ""){
    alert("Insira sua data de nascimento!")
   }if(email == ""){
    alert("Insira seu E-mail!")
   }if(tel == ""){
    alert("Insira seu Telefone!")
   }
   else{
       alert("Cadastro concluído")
   }
}