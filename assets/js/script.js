                   // BOTõES //

                   const calcular = document.getElementById('calcular');
                   const btReset = document.getElementById('btreset');
                         
                   //----//


                   //  SOMA E DIVISÃO //
                   function sum(valor1, valor2, valor3, valor4) {
                     return parseInt(valor1) + parseInt(valor2) + parseInt(valor3) + parseInt(valor4);
                   }

                   function media(val1, val2, val3, val4, val5, val6, val7, val8, val9) {
                     return (parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6) + parseInt(val7) + parseInt(val8)) / val9;

                   }

                    //----//
                   
                            // FUNÇÕES INTERATIVAS  PRONTO, CALCULAR & RESTAURAR //
                      function boasVindas() {
                     const val1 = document.querySelector('#floatingInputName').value;
                     const val2 = document.querySelector('#floatingInputSU').value;

                     document.querySelector('#textoHere').textContent = `Olá ${val1}, seja bem-vindo! | Escola/Universidade: ${val2}`;

                     const divVaiSumir = document.getElementById('vs');
                     const tabela = document.querySelector('.tabela-de-notas-calc');

                     divVaiSumir.style.visibility = "hidden";
                     tabela.style.visibility = "visible";

                   }
                  
                   function calc() {
                    const mat = document.querySelector('#floatingInputMat').value;

                     let a1 = document.querySelector('#m1n1').value;
                     let a2 = document.querySelector('#m1n2').value;
                     let a3 = document.querySelector('#m1n3').value;
                     let a4 = document.querySelector('#m1n4').value;
                     const resultado1 = sum(a1, a2, a3, a4).toFixed(2);

                     const campo1 = document.querySelector('#resultado1');
                     campo1.textContent = resultado1;

                     let b1 = document.querySelector('#m2n1').value;
                     let b2 = document.querySelector('#m2n2').value;
                     let b3 = document.querySelector('#m2n3').value;
                     let b4 = document.querySelector('#m2n4').value;
                     const resultado2 = sum(b1, b2, b3, b4).toFixed(2);

                     const campo2 = document.querySelector('#resultado2');
                     campo2.textContent = resultado2;

                     let c1 = document.querySelector('#m3n1').value;
                     let c2 = document.querySelector('#m3n2').value;
                     let c3 = document.querySelector('#m3n3').value;
                     let c4 = document.querySelector('#m3n4').value;
                     const resultado3 = sum(c1, c2, c3, c4).toFixed(2);

                     const campo3 = document.querySelector('#resultado3');
                     campo3.textContent = resultado3;

                     let d1 = document.querySelector('#m4n1').value;
                     let d2 = document.querySelector('#m4n2').value;
                     let d3 = document.querySelector('#m4n3').value;
                     let d4 = document.querySelector('#m4n4').value;
                     const resultado4 = sum(d1, d2, d3, d4).toFixed(2);
                     const campo4 = document.querySelector('#resultado4')
                     campo4.textContent = resultado4;

                     let e1 = document.querySelector('#m5n1').value;
                     let e2 = document.querySelector('#m5n2').value;
                     let e3 = document.querySelector('#m5n3').value;
                     let e4 = document.querySelector('#m5n4').value;
                     const resultado5 = sum(e1, e2, e3, e4).toFixed(2);
                     const campo5 = document.querySelector('#resultado5')
                     campo5.textContent = resultado5;

                     let f1 = document.querySelector('#m6n1').value;
                     let f2 = document.querySelector('#m6n2').value;
                     let f3 = document.querySelector('#m6n3').value;
                     let f4 = document.querySelector('#m6n4').value;
                     const resultado6 = sum(f1, f2, f3, f4).toFixed(2);
                     const campo6 = document.querySelector('#resultado6')
                     campo6.textContent = resultado6;

                     let g1 = document.querySelector('#m7n1').value;
                     let g2 = document.querySelector('#m7n2').value;
                     let g3 = document.querySelector('#m7n3').value;
                     let g4 = document.querySelector('#m7n4').value;
                     const resultado7 = sum(g1, g2, g3, g4).toFixed(2);
                     const campo7 = document.querySelector('#resultado7')
                     campo7.textContent = resultado7;

                     let h1 = document.querySelector('#m8n1').value;
                     let h2 = document.querySelector('#m8n2').value;
                     let h3 = document.querySelector('#m8n3').value;
                     let h4 = document.querySelector('#m8n4').value;
                     const resultado8 = sum(h1, h2, h3, h4).toFixed(2);
                     const campo8 = document.querySelector('#resultado8')
                     campo8.textContent = resultado8;

                     const mediaFinal = document.querySelector('#mediaFinal');
                     mediaFinal.textContent = media(campo1.textContent, campo2.textContent, campo3.textContent, campo4.textContent, campo5.textContent, campo6.textContent, campo7.textContent, campo8,mat.textContent).toFixed(2);
                   }

                   function resetLabels() {
                     const labels = document.getElementsByClassName('resultados');
                     Array.from(labels).forEach(e => e.textContent = "");


                     console.log(mat.textContent);

                   }

                         // EVENTOS DE CLICK // 

                   calcular.addEventListener("click", calc);
                   btReset.addEventListener("click", resetLabels);