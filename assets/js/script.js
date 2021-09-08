  function getVal1() {
      const val1 = document.querySelector('#teste1').value;
      console.log(val1);
      const val2 = document.querySelector('#teste2').value;
      console.log(val2);

      const username = document.getElementById('username');
      const escola = document.getElementById('escola');

      username.textContent = val1;
      escola.textContent = val2;

      const formzada = document.querySelector('.formzada');
      formzada.style.display = "none";

      const nomezada = document.querySelector('.nomezada');
      nomezada.style.display = "block";

        }
