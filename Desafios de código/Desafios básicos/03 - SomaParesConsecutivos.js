let x = parseInt(gets());
let soma = 0;
let i = 0;

while (x !== 0) {
  while (i < 5) {
    if (x % 2 !== 0) {
      x = x + 1;
    } else {
      soma += x;
      x = x + 1;
      i++;
    }
  }

  print(soma);

}
