// Dados dos pregos
const pregos = {
	"8x8": { diametro: 1.2, comprimento: 19.05, broca: 1.5 },
	"10x10": { diametro: 1.5, comprimento: 25.4, broca: 2 },
	"12x12": { diametro: 1.8, comprimento: 30.5, broca: 2.5 },
	"13x15": { diametro: 2, comprimento: 38, broca: 3 },
	"13x18": { diametro: 2, comprimento: 45, broca: 3 },
	"14x18": { diametro: 2.1, comprimento: 38.1, broca: 3.2 },
	"15x15": { diametro: 2.2, comprimento: 38.1, broca: 3.5 },
	"16x21": { diametro: 2.3, comprimento: 48.3, broca: 3.5 },
	"17x21": { diametro: 2.5, comprimento: 53.3, broca: 4 },
	"18x27": { diametro: 2.7, comprimento: 68.3, broca: 4.5 },
	"19x36": { diametro: 3, comprimento: 91, broca: 5 },
	"22x42": { diametro: 3.2, comprimento: 106.68, broca: 5.5 },
	"22x48": { diametro: 3.5, comprimento: 121.92, broca: 6 },
};

// Função para identificar o prego
function identificarPrego() {
	const medida = document.getElementById("medida").value.trim();
	const resultadoDiv = document.getElementById("resultado");

	if (pregos[medida]) {
		const { diametro, comprimento, broca } = pregos[medida];
		resultadoDiv.innerHTML = `
        <p><strong>Medida:</strong> ${medida}</p>
        <p><strong>Diâmetro:</strong> ${diametro} mm</p>
        <p><strong>Comprimento:</strong> ${comprimento} mm</p>
        <p><strong>Broca Recomendada:</strong> ${broca} mm</p>
      `;
	} else {
		resultadoDiv.innerHTML = `<p style="color: red;">Medida não encontrada. Por favor, insira uma medida válida.</p>`;
	}
}
