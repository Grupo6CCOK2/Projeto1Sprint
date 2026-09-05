function cadastrar() {
    var nome = document.getElementById('inp_nome').value;
    var email = document.getElementById('inp_email').value;
    var telefone = document.getElementById('inp_telefone').value;
    var sobrenome = document.getElementById('inp_sobrenome').value;
    var senha = document.getElementById('inp_senha').value;
    var erro = document.getElementById('erro')

    console.log(nome, email, telefone, sobrenome, senha)

    if (nome == "" || nome == null) {
        erro.innerHTML = "Nome invalido!"
    } else {
        erro.innerHTML = ""
    }

    var contadorArroba = 0
    var posicaoArroba = -1

    for (let i = 0; i < email.length; i++) {
        const caracter = email[i];

        if (caracter == "@") {
            contadorArroba++
            posicaoArroba = i
        }

        if (posicaoArroba !== -1 && caractere === ".") {
            if (i > posicaoArroba + 1) {
                temPontoDepoisDoArroba = true;
            }
        }
    }

    if (contadorArroba === 1 && posicaoArroba > 0 && posicaoArroba < email.length - 1 && temPontoDepoisDoArroba) {
        erro_email.innerHTML = "";
    } else {
        erro_email.innerHTML = "Email invalido!";
    }
}