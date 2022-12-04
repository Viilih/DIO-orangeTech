const { gets, print } = require('./functions');
const numeros = [];
let maiorValor = 0;
for (let i = 0; i < 5; i++) {
	const numeroSorteado = gets();
	numeros.push(numeroSorteado);
}

for (let k of numeros) {
	if (k > maiorValor) {
		maiorValor = k;
	}
}

console.log(maiorValor);
