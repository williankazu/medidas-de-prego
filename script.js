// Dados técnicos atualizados (broca = diâmetro - 0,2 mm)
const pregos = {
	"8x8": { diametro: 1.2, comprimento: 19.05, broca: 1.0 },
	"10x10": { diametro: 1.5, comprimento: 25.4, broca: 1.3 },
	"12x12": { diametro: 1.8, comprimento: 30.5, broca: 1.6 },
	"13x15": { diametro: 2.0, comprimento: 38, broca: 1.8 },
	"13x18": { diametro: 2.0, comprimento: 45, broca: 1.8 },
	"14x18": { diametro: 2.1, comprimento: 38.1, broca: 1.9 },
	"15x15": { diametro: 2.2, comprimento: 38.1, broca: 2.0 },
	"16x21": { diametro: 2.3, comprimento: 48.3, broca: 2.1 },
	"17x21": { diametro: 2.5, comprimento: 53.3, broca: 2.3 },
	"18x27": { diametro: 2.7, comprimento: 68.3, broca: 2.5 },
	"19x36": { diametro: 3.0, comprimento: 91, broca: 2.8 },
	"22x42": { diametro: 3.2, comprimento: 106.68, broca: 3.0 },
	"22x48": { diametro: 3.5, comprimento: 121.92, broca: 3.3 },
};

function identificarPrego() {
	const input = document.getElementById("medida").value.trim();
	const resultado = document.getElementById("resultado");

	// Limpar resultado anterior
	resultado.innerHTML = "";

	if (pregos[input]) {
		const { diametro, comprimento, broca } = pregos[input];
		resultado.innerHTML = `
		<p><strong>Tipo:</strong> ${input}</p>
		<p><strong>Diâmetro:</strong> ${diametro.toFixed(1)} mm</p>
		<p><strong>Comprimento:</strong> ${comprimento} mm</p>
		<p><strong>Broca Recomendada:</strong> ${broca.toFixed(1)} mm</p>
		<p class="dica">💡 Dica: Use uma broca ${broca.toFixed(1)}mm para um encaixe perfeito!</p>
	  `;
	} else {
		resultado.innerHTML = `
		<p style="color: #e53e3e;">
		  ⚠️ Medida não encontrada! Verifique se digitou corretamente (ex: 14x18)
		</p>
	  `;
	}
}
