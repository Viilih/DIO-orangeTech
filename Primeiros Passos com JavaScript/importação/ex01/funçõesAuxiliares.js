const salarioAdd = [2050, 3000, 880];
const adicionalAdd = [250, 100, 50];
let i = 0;
function getAdicional() {
	const adicional = adicionalAdd[i];
	i++;
	return adicional;
}

function getSalario() {
	const salario = salarioAdd[i];
	i++;
	return salario;
}

module.exports = { getSalario, getAdicional };
