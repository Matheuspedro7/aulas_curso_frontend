function parImpar(){
  var a = parseInt(document.getElementById('valor01').value);
 
  if(!(a % 2 == 1)){
    document.getElementById('demo').innerHTML = "É um número par.";
  }else{
    document.getElementById('demo').innerHTML = "É um número ímpar.";
  }

}

/*if (a % 2 == 1){
  document.getElementById('demo').innerHTML = "É um número par.";
}else{
  document.getElementById('demo').innerHTML = "É um número ímpar.";
}*/

