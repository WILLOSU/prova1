
let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let logado = document.querySelector('#logado')
logado.innerHTML = `Olá ${userLogado.nome}` 

if(localStorage.getItem('token')== null){
    alert('Voce precisa estar logado para acessar essa página')
    window.location.href = 'http://127.0.0.7:5500/indexLogin.html' 

}


function sair(){

    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'http://127.0.0.7:5500/indexLogin.html'


}