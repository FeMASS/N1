// Calculo de math
/* Edilson Alzemand */


var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
var n1 = num1.toString();
var n2 = num2.toString();
var solucao = num1 - num2;
console.log(solucao)
document.getElementById('conta').innerHTML = n1 + ' - ' + n2 + " =";


function verificarSub(){
  var resposta = parseFloat(document.getElementById('resposta').value);
  console.log(resposta);
  if(resposta == solucao){
  	document.getElementById('msgCerto').innerHTML = "Você acertou!";
    document.getElementById('proximo').style.display = 'block';
  }
  else{
     document.getElementById('msgErrado').innerHTML = "Ops... Algo de errado não está certo";
     document.getElementById('novamente').style.display = 'block';
     document.getElementById('cartao').style.display = 'none';
  }
}
