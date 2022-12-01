class Car {
	marca;
	cor;
	gasto;
	constructor(m, c, g) {
		this.marca = m;
		this.cor = c;
		this.gasto = g;
	}
	valor(km, preço) {
		let combGasto = this.gasto * km;
		let preçoT = combGasto * preço;
		console.log(preçoT);
	}
}

const car1 = new Car('fiat', 'vermelho', 1 / 12);
car1.valor(70, 5);
// `O valor gasto para completar o percurso de ${km} do carro de marca ${this.marca} e cor ${this.cor} é de: ${preçoT}`
