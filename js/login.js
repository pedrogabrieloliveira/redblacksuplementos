function obterUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}

function salvarUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// CADASTRO -----------------------------------------------------
const formCadastro = document.getElementById('formCadastro');

if (formCadastro) {
    formCadastro.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nomeCadastro').value;
        const email = document.getElementById('emailCadastro').value;
        const senha = document.getElementById('senhaCadastro').value;

        const usuarios = obterUsuarios();

        const existe = usuarios.find(u => u.email === email);
        if (existe) {
            alert('Este email já está cadastrado!');
            return;
        }

        usuarios.push({ nome, email, senha });
        salvarUsuarios(usuarios);

        alert('Conta criada com sucesso!');
        window.location.href = 'login.html';
    });
}

// LOGIN ---------------------------------------------------------
const formLogin = document.getElementById('formLogin');

if (formLogin) {
    formLogin.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('emailLogin').value;
        const senha = document.getElementById('senhaLogin').value;

        const usuarios = obterUsuarios();

        const usuario = usuarios.find(u => u.email === email && u.senha === senha);

        if (!usuario) {
            alert('Email ou senha incorretos!');
            return;
        }

        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

        alert('Login realizado com sucesso!');
        window.location.href = 'index.html';
    });
}
