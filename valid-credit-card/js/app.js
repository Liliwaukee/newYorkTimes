const isValid = () => {
  var number = prompt("ingresa el numero");

 const containerPayment = document.getElementById("cn");
  const blankSpaces = `<span>No puedes ingresar espacios en blanco</span>`;
  containerPayment.appendChild(blankSpaces);

  for(let i = 0; i < number.length; i++){
    if(number[i] === " " || number[i] === "" ){
      return blankSpaces
    } else {

        let cardNumber = number.split(""); //convertimos en array
        let inverse = cardNumber.reverse();//87541... números al revés
        let odd = 0;
        let even = 0;
        let evenPlus = 0;

        for(let j = 0; j < 16; j++){ //aquí sacamos la suma de numeros impares
          if(j % 2 !== 1){
             odd = odd + parseInt(inverse[j]);
          }
        }

        for(var k = 1; k <16; k++){
          //sacamos el números pares menores a 4 y multiplicamos por 2
          if (k % 2 === 1 && parseInt(inverse[k]) <= 4){
            even = even + (parseInt(inverse[k])*2);
            // de aquí en adelante reasiganamos los valores mayores del
          } else if (k % 2 === 1 && inverse[k] == 5){
             evenPlus = evenPlus + parseInt(1);
          } else if (k % 2 === 1 && inverse[k] == 6){
             evenPlus = evenPlus + parseInt(3);
          } else if (k % 2 === 1 && inverse[k] == 7){
             evenPlus = evenPlus + parseInt(5);
          } else if (k % 2 === 1 && inverse[k] == 8){
             evenPlus = evenPlus + parseInt(7);
          } else if (k % 2 === 1 && inverse[k] == 9){
             evenPlus = evenPlus + parseInt(9);
          }
        }

      //hacemos la de nuestros numeros pares, pares mayores e impares y comprobamos si son módulo de 10
      var ckeckCard = even + odd + evenPlus;
          if(ckeckCard % 10 === 0){
            return document.write("It´s a valid card");
          } else {
            return document.write("Your card is an invalid card");
          }
      }
  }
}

isValid();


//4152313059935309
//4915665457040406
