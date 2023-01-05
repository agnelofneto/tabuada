function tabuada() {
  var num = document.getElementById("input_num").value;
  var result = document.getElementById("text_area");
  var tabuada = "";

  for(var i=1; i<=10 ; i++)
   tabuada += `${num}x${i}= 
               ${num*i}<br /><br />`;
  
  if (num > 10 || num < 1 ) {  
    tabuada = " inserir numeros entre 1 a 10 "
    
  }
  result.innerHTML = tabuada;
}



















/*
    var height = document.getElementById("height").value
    var weigth = document.getElementById("weigth").value
    console.log(height)
    console.log(weigth)
    var result = weigth / ((height * height) / 10000);
    var text =""
    for(var count=1; count<=10 ; count++)
   tabuada += num+" x "+count+" = "+
               num*count+"for(var count=1; count<=10 ; count++)
   tabuada += num+" x "+count+" = "+
               num*count+"<br />";";
    
    /*
    if (tabuada < 1) {
        text ="digite um valor entre 1 a 10"
    } else if (tabuada > 10 ) {
        text = "digite um valor entre 1 a 10"

    }

    document.getElementById("text_area").innerText = text
    */
