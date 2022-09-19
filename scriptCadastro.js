let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')
let btncpf = document.querySelector('#cpf')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let cpf = document.querySelector('#cpf')
let labelcpf = document.querySelector('#labelcpf')



let endereco = document.querySelector('#endereco')
let labelendereco = document.querySelector('#labelendereco')
let validendereco = false

let nascimento = document.querySelector('#nascimento')
let labelnascimento = document.querySelector('#labelnascimento')


let renda = document.querySelector('#renda')
let labelrenda = document.querySelector('#labelrenda')
let validrenda = false

let profissao = document.querySelector('#profissao')
let labelprofissao = document.querySelector('#labeprofissao')
let valideprofissao = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false



let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')



nome.addEventListener('keyup', () => {
  if(nome.value.length >= 100){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *ultrapassou 100 caracteres digitar novamente abreviando'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

endereco.addEventListener('keyup', () => {
  if(endereco.value.length >= 100){
    labelendereco.setAttribute('style', 'color: red')
    labelendereco.innerHTML = 'Nome *ultrapassou 100 caracteres digitar novamente abreviando'
    endereco.setAttribute('style', 'border-color: red')
    validendereco = false
  } else {
    labelendereco.setAttribute('style', 'color: green')
    labelendereco.innerHTML = 'Nome'
    endereco.setAttribute('style', 'border-color: green')
    validendereco = true
  }
})

renda.addEventListener('keyup', () => {
  if(renda.value > 2548){
    labelrenda.setAttribute('style', 'color: red')
    labelrenda.innerHTML = '*ultrapassou está acima da média mensal do brasileiro!!'
    renda.setAttribute('style', 'border-color: red')
    validrenda = false
  } else {
    labelrenda.setAttribute('style', 'color: green')
    labelrenda.innerHTML = 'Sua Renda está abaixo da média mensal do Brasileiro.'
    renda.setAttribute('style', 'border-color: green')
    validrenda = true
  }
})


  
  


 


function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]') //armazena no local storage - vetor - array
    
    listaUser.push( // passando objeto, criei o objeto e fiz o push dentro da lista
    {
      nomeCad:       nome.value, // pego os valores do input
      userCad:       usuario.value,
      senhaCad:      senha.value,
      cpfCad:        cpf.value,
      endereco:      endereco.value,
      nascimentoCad: nascimento.value,
      rendaCad:      renda.value,
      profissaoCad:  profissao.value

    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser)) // salavando os dados no localStorage
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{ // atrazar cria um deley
        window.location.href = 'http://127.0.0.7:5500/indexLogin.html' 
    }, 1000) // milesegundos = 1 segundo depois volta para tela inicial
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})


  
function  validarPrimeiroDigito (cpf)  {
  let  soma = 0;
  for  (let i = 0;  i  < 9;  i++)  {
    soma  +=  cpf [i] *  (10 - i) ;
  }
  const  resto  =  (soma * 10)  %  11 ;
  if  ( resto  < 10 )  {
    return  cpf [9]  ==  resto ;// dígitio verificador na posição 9
  }
  return  cpf  [9] ==  0; // se o cpf foi igual a zero 
}

function  validarSegundoDigito ( cpf )  {//aqui vou de zero até 10
  let  soma  =  0 ;
  for  ( let  i  =  0 ;  i  <  10 ;  i ++ )  {
    soma  +=  cpf [ i ]  *  ( 11  -  i ) ;
  }
  const  resto  =  ( soma  *  10 )  %  11 ;
  if  ( resto  <  10 )  {
    return  cpf [ 10 ]  ==  resto ;
  }
  return  cpf [ 10 ]  ==  0 ;
}

function  validarRepetido (cpf)  {
  const  primeiro = cpf [0] ; 
  let  diferente  =  false;
  for (let i = 1; i< cpf.length;  i ++ )  {
    if (cpf [i]!= primeiro)  {
      diferente = true;
    }
  }
  return  diferente;
}

function  validarCpf (cpf)  {
  if  (cpf.length !=  11)  {
    return false;
  }
  if (!validarRepetido (cpf) )  {
    return false;
  }
  if  (!validarPrimeiroDigito (cpf)) {
    return false;
  }
  if  (! validarSegundoDigito (cpf)) {
    return false;
  }
  return true;
}

/* Função que realiza algumas validações sobre a idade */
function idadeValida(nascimento) {

	// remove todos os espaços em branco
	nascimento = nascimento.replace(/\s+/g, "");


	// verifica se a idade contém somente números
	for(var i = 0; i < nascimento.length; i++) {
		if (!(nascimento[i] in [1,2,3,4,5,6,7,8,9])) {
			return false;
		}
	}
	return true;
} 

/* Calcula o ano de nascimento dada uma idade */
function getAno() {
	// obtém o formulário pelo ID
	 labelnascimento = document.getElementById('#nascimento');
	
	// obtém a idade passada pelo usuário
	nascimento = labelnascimento.value;
	// testa se a idade é válida
	if (idadeValida(nascimento)) {
		// faz o cálculo com base no ano de 2014
		ano = 2022 - nascimento;
		
	} else {
		alert("Entre com uma idade válida.");
	}
}
