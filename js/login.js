// criacao de uma constante com um email e senha validos

const user = {
  email: "emo_sad@hotmail.com",
  password: "1234"
}

// criacao de constantes para retornar os elementos 

const emailLogin = document.querySelector(".loginInput")
const passwordLogin = document.querySelector(".passwordInput")
const loginButton = document.querySelector(".submitLogin")

// funcao utilizada para validar o login

function userValidation(){
  const dataLogin = {
    email: emailLogin.value,
    password: passwordLogin.value
  }

  if(dataLogin.email === user.email && dataLogin.password === user.password){
    window.location = "./index.html"
  }else{
    alert("danger! parece que vc vai ficar preso em 2022")
  }
}

// 

loginButton.addEventListener("click", function (e){
  e.preventDefault()
  userValidation()
})



