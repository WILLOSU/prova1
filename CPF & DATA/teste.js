function  validarPrimeiroDigito (cpf)  {
    let  soma = 0;
    for  (let i = 0;  i  < 9;  i++)  {
      soma  +=  (cpf [i] *  (10 - i)) ;
    }
    const  resto  =  (soma * 10)  %  11 ;
    if  ( resto  < 10 )  {
      return  cpf [9]  ==  resto ;// dígito verificador na posição 9
    }
    return  cpf  [9] ==  0; // se o cpf foi igual a zero 
    
  }
  
  function  validarSegundoDigito ( cpf )  {//aqui vou de zero até 10
    let  soma  =  0 ;
    for  ( let  i  =  0 ;  i  <  10 ;  i ++ )  {
      soma  +=  (cpf [ i ]  *  ( 11  -  i )) ;
    }
    const  resto  =  ( soma  *  10 )  %  11 ;
    if  ( resto  <  10 )  {
      return  cpf [ 10 ]  ==  resto ;
    }
    return  cpf [ 10 ]  ==  0 ;
    console.log(cpf);
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
    console.log(cpf);
  }
  
  function  validarCpf (cpf)  {
    if  ((cpf.length !=  11) || (!validarRepetido (cpf)) || (!validarPrimeiroDigito (cpf)) || (! validarSegundoDigito (cpf)))
    alert("CPF INVÁLIDO.");

    else{
        alert("CPF VÁLIDO.");
    }}

    function  validarCpf (cpf)  {
        if  (cpf.length !=  11)  {
            return false;
        }
       if(!validarRepetido (cpf) )  {
        return false;
        }
        if (!validarPrimeiroDigito (cpf)) {
            return false;
        }
         if  (! validarSegundoDigito (cpf)) {
            return false;
    
        } else
        return false;
    
    
      }
      