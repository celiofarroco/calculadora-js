let numberOne, numberTwo, sum, sub, mult, div, rest;

numberOne = Number(prompt("Digite o primeiro número:"));
numberTwo = Number(prompt("Digite o segundo número:"));

sum = numberOne + numberTwo;
sub = numberOne - numberTwo;
mult = numberOne * numberTwo;
div = (numberOne / numberTwo).toFixed(2);
rest = numberOne % numberTwo;

alert(`A soma dos dois números é igual a ${sum}`);
alert(`A subtração dos dois números é igual a ${sub}`);
alert(`A multiplicação dos dois números é igual a ${mult}`);
alert(`A divisão dos dois números é igual a ${div}`);
alert(`O resto da divisão dos dois números é igual a ${rest}`);

if (numberOne == numberTwo) {
  alert("Os números inseridos são iguais");
} else {
  alert("Os números inseridos são diferentes");
}

if (sum % 2 == 0) {
  alert(`A soma dos números é par: ${sum}`);
} else {
  alert(`A soma dos números é ímpar: ${sum}`);
}
