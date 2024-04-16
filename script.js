document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".botao");

    botoes.forEach((botao) => {
        botao.addEventListener("mousedown", function () {
            this.style.backgroundColor = "#737373"; // Altera a cor para vermelho quando pressionado
        });

        botao.addEventListener("mouseup", function () {
            this.style.backgroundColor = ""; // Restaura a cor original quando soltar o botão
        });

        // Caso o mouse saia da div enquanto pressionado
        botao.addEventListener("mouseleave", function () {
            this.style.backgroundColor = ""; // Restaura a cor original
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const botoesLaterais = document.querySelectorAll(".botao-lateral");

    botoesLaterais.forEach((botao) => {
        botao.addEventListener("mousedown", function () {
            this.style.backgroundColor = "#FBC78D"; // Altera a cor para azul quando pressionado
        });

        botao.addEventListener("mouseup", function () {
            this.style.backgroundColor = ""; // Restaura a cor original quando soltar o botão
        });

        // Caso o mouse saia da div enquanto pressionado
        botao.addEventListener("mouseleave", function () {
            this.style.backgroundColor = ""; // Restaura a cor original
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const botaoZero = document.querySelector(".botao-zero");

    botaoZero.addEventListener("mousedown", function () {
        this.style.backgroundColor = "#737373"; // Altera a cor para verde quando pressionado
    });

    botaoZero.addEventListener("mouseup", function () {
        this.style.backgroundColor = ""; // Restaura a cor original quando soltar o botão
    });

    // Caso o mouse saia da div enquanto pressionado
    botaoZero.addEventListener("mouseleave", function () {
        this.style.backgroundColor = ""; // Restaura a cor original
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const botoesBrancos = document.querySelectorAll(".botao-branco");

    botoesBrancos.forEach((botao) => {
        botao.addEventListener("mousedown", function () {
            this.style.backgroundColor = "white"; // Altera a cor para branca quando pressionado
        });

        botao.addEventListener("mouseup", function () {
            this.style.backgroundColor = ""; // Restaura a cor de fundo original quando soltar o botão
        });

        // Caso o mouse saia da div enquanto pressionado
        botao.addEventListener("mouseleave", function () {
            this.style.backgroundColor = ""; // Restaura a cor de fundo original
        });
    });
});
let numeroAtual = '0';
let operacaoAtual = '';
let numeroAnterior = '0';

function adicionarDigito(digito) {
    if (numeroAtual === '0') {
        numeroAtual = '';
    }
    numeroAtual += digito;
    atualizarDisplay();
}

function adicionarPonto() {
    if (!numeroAtual.includes('.')) {
        numeroAtual += '.';
        atualizarDisplay();
    }
}

function limpar() {
    numeroAtual = '0';
    operacaoAtual = '';
    numeroAnterior = '0';
    atualizarDisplay();
}

function mudarSinal() {
    numeroAtual = String(-parseFloat(numeroAtual));
    atualizarDisplay();
}

function porcentagem() {
    numeroAtual = String(parseFloat(numeroAtual) / 100);
    atualizarDisplay();
}

function operacao(op) {
    operacaoAtual = op;
    numeroAnterior = numeroAtual;
    numeroAtual = '0';
}

function calcular() {
    let resultado;
    const anterior = parseFloat(numeroAnterior);
    const atual = parseFloat(numeroAtual);
    switch (operacaoAtual) {
        case '+':
            resultado = anterior + atual;
            break;
        case '-':
            resultado = anterior - atual;
            break;
        case '*':
            resultado = anterior * atual;
            break;
        case '/':
            resultado = anterior / atual;
            break;
        default:
            return;
    }
    numeroAtual = String(resultado);
    operacaoAtual = '';
    numeroAnterior = '0';
    atualizarDisplay();
}

function atualizarDisplay() {
    document.getElementById('display').innerText = numeroAtual;
    
    if (numeroAtual.length > 6 && numeroAtual.length < 9) {
        display.style.fontSize = '40pt'; // Altere o tamanho da fonte conforme necessário
    } 
    
    else if (numeroAtual.length > 8) {
        display.style.fontSize = '30pt'
    }

    else {
        display.style.fontSize = '50pt'
    }
}