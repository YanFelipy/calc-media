const btPronto = document.querySelector('#btCalc')

  function boasVindas() {
    const val1 = document.querySelector('#floatingInputName').value;
    const val2 = document.querySelector('#floatingInputSU').value;
      
    document.querySelector('#textoHere').textContent = `Olá ${val1}, seja bem-vindo! | Escola/Universidade: ${val2}`;

  }

  function EsconderDiv() {
    const val1 = document.querySelector('#floatingInputName').value;
const val2 = document.querySelector('#floatingInputSU').value;

    const divVaiSumir = document.getElementById('vs');
    const nomezada = document.querySelector('.tabela-de-notas-calc');
    
    if(val1.textContent !== '' && val2.textContent !== '') {
    
    divVaiSumir.style.visibility = "hidden";
    nomezada.style.visibility = "visible";
    
    } else alert('Preencha os campos');
  }

 btPronto.addEventListener('click', EsconderDiv);


 
