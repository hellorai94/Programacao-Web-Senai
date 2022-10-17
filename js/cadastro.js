// criacao de constantes para retornar os elementos 

const getEmail = document.querySelector(".email")
const getPassword = document.querySelector(".senha")
const submitRegister =  document.querySelector(".submit")

// criacao do array para alocar os objetos

const arr = [] 

//funcao para armazenar os dados do usuario e colocar no array

function registeredLogin(){
  const data ={
    email: getEmail.value,
    senha: getPassword.value
  }

  //funcao para adicionar os objetos no login

  arr.push(data) 
  
  console.log(arr)
}

submitRegister.addEventListener("click", function (e){

  // serve para prevenir a pagina de recarregar 

  e.preventDefault() 
  
  // faz a limpeza do console para nao acumular
  console.clear() 

  registeredLogin()
}) 




