var texto = document.getElementById("text_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
var lineas = 150;
var l = 0;
var yi , xf;
var yf , xi;
var color1 = "grey";
function dibujoPorClick(){
  var xxx = parseInt(texto.value);
  var lineas = xxx;
  var l = 0;
  var yi , xf , yf , xi;
  var color1 = "grey";

  var espacio = ancho /lineas;
  alert("has digitado esta cantidad de lineas: " + xxx);

  for( l= 0 ; l< lineas; l++ ){
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("#a100b9", 0, yi, xf,299);/*inferior izquierda*/
    dibujarLinea("#689eff", 299, yi, xf,0);/*superior derecha*/
    console.log("linea" + l);
  }
  do {
    dibujarLinea("#edf700", 299, yi, xf,299);/*inferior derecha*/
    dibujarLinea("#00e612", xi,0, 0,299-(l* espacio));/*superior izquierda*/
    xi = espacio *l;
    yi = espacio *l;
    xf = 299 -(l* espacio);
    yf = 299 -(l* espacio);
    l--
  }
  while(l>0)

  /* Bordes de dibujo*/
  dibujarLinea("blue", 299,1,1,1);
  dibujarLinea("blue", 299,299,299,1);

  dibujarLinea("violet", 1,1,1,299);
  dibujarLinea("violet", 1,299,299,299);

}


function dibujarLinea(color, xinicial, yinicial, xfinal,yfinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
  lienzo.beginPath();
}

/*while(l < lineas ){
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea(color1, 0, yi, xf,300);
  console.log("linea" + l);
  l ++;
}*/
