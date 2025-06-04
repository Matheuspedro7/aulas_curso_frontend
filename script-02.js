function soma(){
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = parseInt(a) + parseInt(b);
}

function subtracao(){
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = parseInt(a) - parseInt(b);
}

function multiplicacao(){
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = parseInt(a) * parseInt(b);
}

function divisao(){
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = parseInt(a) / parseInt(b);
}

function potenciacao(){
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = parseInt(a) ** parseInt(b);
}