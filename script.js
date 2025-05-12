let nomes = [];

function adicionarNome() {
    const nome = document.getElementById('nome');
    const nomeValido = nome.value.trim();

    if (nomeValido) {
        nomes.push(nomeValido);
        atualizarLista();
        nome.value = '';
        nome.focus();
    } else {
        alert('Digite um nome válido!');
    }
}

function atualizarLista() {
    const listaNome = document.getElementById('listaNome');
    listaNome.innerHTML = '';

    nomes.forEach((nomeValido, index) => {
        const li = document.createElement('li');
        li.textContent = nomeValido;
        listaNome.appendChild(li);
    });
}

function sortearNome() {
    if (nomes.length === 0) {
        alert('Adicione ao menos um nome antes de sortear!');
        return;
    }

    const nomeAleatorio = Math.floor(Math.random() * nomes.length);
    const selecionandoNome = nomes[nomeAleatorio];

    document.getElementById('resultado').textContent = `Sorteado: ${selecionandoNome}`;
}


