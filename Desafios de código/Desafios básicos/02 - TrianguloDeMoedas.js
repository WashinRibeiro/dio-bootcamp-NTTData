let N = parseInt(gets());
let valorSubtraido = N;
let altura = 0;

for (let i = 1; i <= N; i++) {
  if (valorSubtraido - i >= 0) {
    valorSubtraido -= i;
    altura++;
  }
}

print(altura);
