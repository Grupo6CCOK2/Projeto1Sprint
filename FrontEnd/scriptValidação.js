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
    var temPontoDepoisDoArroba = false;

    for (let i = 0; i < email.length; i++) {
        const caracter = email[i];

        if (caracter == "@") {
            contadorArroba++
            posicaoArroba = i
        }

        if (posicaoArroba !== -1 && caracter === ".") {
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

    if (telefone == "" || telefone.length < 11) {
        erro_numero.innerHTML = "Telefone invalido!"
    } else {
        erro_numero.innerHTML = ""
    }

    if (sobrenome == "" || sobrenome < 11) {
        erro_sobrenome.innerHTML = "Sobrenome invalido!"
    } else {
        erro_sobrenome.innerHTML = ""
    }

    var caracteresEspeciais = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
    var temEspecial = false;

    if (senha.length < 6) {
        erro_senha.innerHTML = "Senha muito curta minimo 6";
    } else {
        for (let i = 0; i < senha.length; i++) {
            let caracterAtual = senha[i];

            if (caracteresEspeciais.includes(caracterAtual)) {
                temEspecial = true;
                break;
            }
        }

        if (!temEspecial) {
            erro_senha.innerHTML = " Deve conter ao menos 1 caractere especial!";
        } else {
            erro_senha.innerHTML = "";
        }
    }

    fetch('http://localhost:8080/Usuarios/cadastrar')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Houve um problema:', error);
        });

    const dadosParaEnviar = {
        nome: document.getElementById('inp_nome').value,
        sobrenome: document.getElementById('inp_sobrenome').value,
        email: document.getElementById('inp_email').value,
        senha: document.getElementById('inp_senha').value,
        telefone: document.getElementById('inp_telefone').value,
        temDependente: false
    };

    fetch('http://localhost:8080/Usuarios/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosParaEnviar)
    })
        .then(response => {
            if (response.status === 201) {
                alert("Usuário cadastrado com sucesso!");
                return;
            } else if (response.status === 409) {
                alert("E-mail ou telefone já cadastrados!");
                throw new Error("Usuário já existe.");
            } else if (!response.ok) {
                throw new Error("Erro na requisição: " + response.status);
            }


            return response.json();
        })
        .then(data => {
            if (data) {
                console.log("Sucesso:", data);
            }
        })
        .catch(error => {
            console.error("Houve um problema:", error);
        });
}