const pronpt = require('prompt-sync');
const input = pronpt();

var x = input("Fale o valor de x: ");

var y = input("Fale o valor de y: ");

while (x != 0 || y != 0) {

  if (x > 0 && y > 0) {

    console.log("\nPrimeiro quadrante\n");

  } else if (x < 0 && y > 0) {

    console.log("\nSegundo quadrante\n");

  } else if (x < 0 && y < 0) {

    console.log("\nTerceiro quadrante\n");

  } else if (x > 0 && y < 0) {

    console.log("\nQuarto quadrante\n");

  }

  x = input("Fale o valor de x: ");
  y = input("Fale o valor de y: ");
}
