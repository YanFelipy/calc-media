  function getVal1() {
    const username = document.querySelector('#floatingInputName').value;
    const escola = document.querySelector('#floatingInputSU').value;

    username.textContent = username;
    escola.textContent = escola;
    const boasVindas = document.getElementById('#textoHere')
    const divVaiSumir = document.getElementById('vs');


    username.textContent = username;
    escola.textContent = escola;


    divVaiSumir.style.display = "none"


    const nomezada = document.querySelector('.tabela-de-notas-calc');
    nomezada.style.visibility = "visible";

    boasVindas.textContent = `Olá,${username} seja bem-vindo. | Escola/Universidade: ${escola}`;




  }