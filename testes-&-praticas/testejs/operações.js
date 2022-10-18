let valor1 = Number(prompt('Digite um número:'));
let valor2 = Number(prompt('Digite outro número:'));

let soma = valor1 + valor2;
let sub = valor1 - valor2;
let multp = valor1 * valor2;
let divs = valor1 / valor2;
let sqrt = Math.sqrt(valor1);
let sqrt2 = Math.sqrt(valor2);
let sqrt3 = Math.sqrt(valor1+valor2);
let cbrt = Math.cbrt(valor1);
let cbrt2 = Math.cbrt(valor2);
let cbrt3 = Math.cbrt(valor1+valor2);

let max_Value1 = valor1;
let max_Value2 = valor2;




function clicou1() {
  
  resultado = document.getElementById('saida1');
  resultado.innerHTML = `<p>O resultado da soma é <mark><strong>${soma}</strong></mark></p?`;

  if (valor1 != 0 && valor2 == 0) {
  
    resultado = document.getElementById('saida1');
    resultado.innerHTML = `<p><mark><strong>OPERAÇÃO INVÁLIDA</strong></mark></p>`;
  
    }else if (valor1 == 0 && valor2 != 0){
      resultado = document.getElementById('saida1');
      resultado.innerHTML = `<p><mark><strong>OPERAÇÃO INVÁLIDA</strong></mark></p>`;
    }

}


function clicou2() {
  
  resultado = document.getElementById('saida2');
  resultado.innerHTML = `<p>O resultado da subtração é <mark><strong>${sub}</strong></mark></p?`;

  if (valor1 != 0 && valor2 == 0) {
  
    resultado = document.getElementById('saida2');
    resultado.innerHTML = `<p><mark><strong>OPERAÇÃO INVÁLIDA</strong></mark></p>`;
  
    }else if (valor1 == 0 && valor2 != 0){
      resultado = document.getElementById('saida2');
      resultado.innerHTML = `<p><mark><strong>OPERAÇÃO INVÁLIDA</strong></mark></p>`;
    }

}

function clicou3() {
  
  resultado = document.getElementById('saida3');
  resultado.innerHTML = `<p>O resultado da multiplicação é <mark><strong>${multp}</strong></mark></p?`;

  if (valor1 != 0 && valor2 == 0) {
  
    resultado = document.getElementById('saida3');
    resultado.innerHTML = `<p><mark><strong>OPERAÇÃO INVÁLIDA</strong></mark></p>`;
  
    }else if (valor1 == 0 && valor2 != 0){
      resultado = document.getElementById('saida3');
      resultado.innerHTML = `<p><mark><strong>OPERAÇÃO INVÁLIDA</strong></mark></p>`;
    }

}

function clicou4() {
  
  resultado = document.getElementById('saida4');
  resultado.innerHTML = `<p>O resultado da divisão é <mark><strong>${divs}</strong></mark></p?`;

  if (valor1 != 0 && valor2 == 0) {
  
    resultado = document.getElementById('saida4');
    resultado.innerHTML = `<p><mark><strong>OPERAÇÃO INVÁLIDA</strong></mark></p>`;
  
    }else if (valor1 == 0 && valor2 != 0){
      resultado = document.getElementById('saida4');
      resultado.innerHTML = `<p><mark><strong>OPERAÇÃO INVÁLIDA</strong></mark></p>`;
    }

}

function clicou5() {


  
  if (valor1 != 0 && valor2 == 0) {
  
  resultado = document.getElementById('saida5');
  resultado.innerHTML = `<p>A raiz quadrada é <mark><strong>${sqrt}</strong></mark></p>`;

  }else if (valor1 == 0 && valor2 != 0){
    resultado = document.getElementById('saida5');
    resultado.innerHTML = `<p>A raiz quadrada é <mark><strong>${sqrt2}</strong></mark></p>`;
  }
  else if (valor1 != 0 && valor2 != 0){
    resultado = document.getElementById('saida5');
    resultado.innerHTML = `<p>A raiz quadrada é <mark><strong>${sqrt3}</strong></mark></p>`;
  }
  

}


function clicou6() {


  
  if (valor1 != 0 && valor2 == 0) {
  
  resultado = document.getElementById('saida6');
  resultado.innerHTML = `<p>A raiz cúbica é <mark><strong>${cbrt}</strong></mark></p>`;

  }else if (valor1 == 0 && valor2 != 0){
    resultado = document.getElementById('saida6');
    resultado.innerHTML = `<p>A raiz cúbica é <mark><strong>${cbrt2}</strong></mark></p>`;
  }
  else if (valor1 != 0 && valor2 != 0){
    resultado = document.getElementById('saida6');
    resultado.innerHTML = `<p>A raiz cúbica é <mark><strong>${cbrt3}</strong></mark></p>`;
  }
  

}


function clicou7() {
  
  if (valor1 > valor2) {
    
    resultado = document.getElementById('saida7');
    resultado.innerHTML = `<p> O maior número entre ${valor1} e ${valor2} é <mark><strong>${max_Value1}</strong></mark></p>`
  }
  else if (valor1 < valor2){
    resultado = document.getElementById('saida7');
    resultado.innerHTML = `<p> O maior número entre ${valor1} e ${valor2} é <mark><strong>${max_Value2}</strong></mark></p>`
  }
}


function resetar() {
  
 document.location.reload();

}


