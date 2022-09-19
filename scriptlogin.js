let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = [] // recebe um array vazio 
  
  let userValid = { // usei uma engenharia reversa, recebe o objeto e digo quais são os campos que deve receber
    nome: '',       // criei um objeto dentro do java script com campos e atributos pré determinado. 
    user: '',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser')) // peguei a lista e ela receber o JSON
  
  listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){ // validando os campos
       
      userValid = { // se for verdadeiro e incremento ele preenche o objeto, se o usuario não existir traz vazio        
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad
       }
      
    }
  })
   
  // verifica se a senha o usuário estão corretos

  if(usuario.value == userValid.user && senha.value == userValid.senha){
    window.location.href = 'http://127.0.0.7:5500/indexLogado.html' // corrigir
    
    let mathRandom = Math.random().toString(16).substr(2) // criando um token gera de forma randomica um Math, 
                                                          // garanto que está logado
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }
  
}