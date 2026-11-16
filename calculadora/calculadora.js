
function calcular() {

    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);

    let resultado = document.getElementById("resultado");

    // Verificar campos vazios
    if (
        document.getElementById("a").value === "" ||
        document.getElementById("b").value === "" ||
        document.getElementById("c").value === ""
    ) {
        resultado.innerHTML = "<h3>Erro</h3><p>Preencha todos os campos!</p>";
        return;
    }

    // Verificar se A é zero
    if (a === 0) {
        resultado.innerHTML = "<h3>Erro</h3><p>O valor de A não pode ser zero. A equação não é do segundo grau.</p>";
        return;
    }

    // Calcular Delta
    let delta = (b * b) - (4 * a * c);

    // Verificar Delta
    if (delta < 0) {
        resultado.innerHTML = `
            <h3>Resultado</h3>
            <p>Delta = ${delta}</p>
            <p>Não existem raízes reais, pois Delta é negativo.</p>
        `;
        return;
    }

    // Calcular raízes
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    // Mostrar resultado
    resultado.innerHTML = `
        <h3>Resultado</h3>
        <p><strong>Delta:</strong> ${delta}</p>
        <p><strong>Raiz X1:</strong> ${x1.toFixed(2)}</p>
        <p><strong>Raiz X2:</strong> ${x2.toFixed(2)}</p>
    `;
}

function limpar() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";

    document.getElementById("resultado").innerHTML = `
        <h3>Resultado</h3>
        <p>Informe os valores para começar.</p>
    `;
}
