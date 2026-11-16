
const tela = document.getElementById("tela");

let numeroAtual = "0";
let numeroAnterior = null;
let operador = null;
let aguardandoNovoNumero = false;

function atualizarTela() {
    tela.value = numeroAtual;
}

function adicionarNumero(numero) {

    if (aguardandoNovoNumero) {
        numeroAtual = numero;
        aguardandoNovoNumero = false;
    } else {
        if (numeroAtual === "0") {
            numeroAtual = numero;
        } else {
            numeroAtual += numero;
        }
    }

    atualizarTela();
}

function adicionarDecimal() {

    if (aguardandoNovoNumero) {
        numeroAtual = "0";
        aguardandoNovoNumero = false;
    }

    if (!numeroAtual.includes(".")) {
        numeroAtual += ".";
    }

    atualizarTela();
}

function escolherOperador(novoOperador) {

    if (operador !== null && !aguardandoNovoNumero) {
        calcularResultado();
    }

    numeroAnterior = Number(numeroAtual);
    operador = novoOperador;
    aguardandoNovoNumero = true;
}

function calcularResultado() {

    if (operador === null || numeroAnterior === null) {
        return;
    }

    const segundoNumero = Number(numeroAtual);
    let resultado;

    switch (operador) {

        case "+":
            resultado = numeroAnterior + segundoNumero;
            break;

        case "-":
            resultado = numeroAnterior - segundoNumero;
            break;

        case "*":
            resultado = numeroAnterior * segundoNumero;
            break;

        case "/":
            if (segundoNumero === 0) {
                numeroAtual = "Erro: divisão por zero";
                numeroAnterior = null;
                operador = null;
                aguardandoNovoNumero = true;
                atualizarTela();
                return;
            }

            resultado = numeroAnterior / segundoNumero;
            break;
    }

    numeroAtual = String(Number(resultado.toPrecision(12)));
    numeroAnterior = null;
    operador = null;
    aguardandoNovoNumero = true;

    atualizarTela();
}

function limparCalculadora() {
    numeroAtual = "0";
    numeroAnterior = null;
    operador = null;
    aguardandoNovoNumero = false;
    atualizarTela();
}

function apagarNumero() {

    if (aguardandoNovoNumero) {
        return;
    }

    if (numeroAtual.startsWith("Erro")) {
        limparCalculadora();
        return;
    }

    numeroAtual = numeroAtual.length > 1
        ? numeroAtual.slice(0, -1)
        : "0";

    if (numeroAtual === "-") {
        numeroAtual = "0";
    }

    atualizarTela();
}

function calcularPorcentagem() {

    if (numeroAtual.startsWith("Erro")) return;

    numeroAtual = String(Number(numeroAtual) / 100);
    atualizarTela();
}

function inverterSinal() {

    if (numeroAtual.startsWith("Erro")) return;

    if (Number(numeroAtual) !== 0) {
        numeroAtual = String(Number(numeroAtual) * -1);
    }

    atualizarTela();
}

// Eventos dos botões da calculadora

document.querySelectorAll("[data-number]").forEach(botao => {
    botao.addEventListener("click", () => {
        adicionarNumero(botao.dataset.number);
    });
});

document.querySelectorAll("[data-operator]").forEach(botao => {
    botao.addEventListener("click", () => {
        escolherOperador(botao.dataset.operator);
    });
});

document.querySelectorAll("[data-action]").forEach(botao => {

    botao.addEventListener("click", () => {

        const acao = botao.dataset.action;

        switch (acao) {
            case "clear":
                limparCalculadora();
                break;

            case "delete":
                apagarNumero();
                break;

            case "decimal":
                adicionarDecimal();
                break;

            case "equals":
                calcularResultado();
                break;

            case "percent":
                calcularPorcentagem();
                break;

            case "sign":
                inverterSinal();
                break;
        }
    });
});

// BHASKARA

document.getElementById("calcularBhaskara")
    .addEventListener("click", calcularBhaskara);

function calcularBhaskara() {

    const aCampo = document.getElementById("valorA").value;
    const bCampo = document.getElementById("valorB").value;
    const cCampo = document.getElementById("valorC").value;

    const resultado = document.getElementById("resultadoBhaskara");

    if (aCampo === "" || bCampo === "" || cCampo === "") {
        resultado.innerHTML = "Preencha todos os campos.";
        return;
    }

    const a = Number(aCampo);
    const b = Number(bCampo);
    const c = Number(cCampo);

    if (a === 0) {
        resultado.innerHTML = "O valor de A não pode ser zero.";
        return;
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        resultado.innerHTML = `
            <strong>Delta:</strong> ${delta}<br>
            Não existem raízes reais.
        `;
        return;
    }

    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    resultado.innerHTML = `
        <strong>Delta:</strong> ${delta}<br>
        <strong>X1:</strong> ${Number(x1.toFixed(8))}<br>
        <strong>X2:</strong> ${Number(x2.toFixed(8))}
    `;
}
