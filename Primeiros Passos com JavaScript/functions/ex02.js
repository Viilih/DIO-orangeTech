function conta(valor, forma) {
	res = 0;
	if (forma == 4) {
		res = aplicaJuros(valor, 10);
	}
	if (forma == 3) {
		res = aplicaDesconto(valor, 0);
	}
	if (forma == 2) {
		res = aplicaDesconto(valor, 15);
	}
	if (forma == 1) {
		res = aplicaDesconto(valor, 10);
	}
	return res.toFixed(2);
}

function aplicaDesconto(valor, desconto) {
	return valor * ((100 - desconto) / 100);
}

function aplicaJuros(valor, juros) {
	return valor * (1 + juros / 100);
}
console.log(conta(100, 4));
