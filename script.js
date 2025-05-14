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
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Digite um número!'
        });
    }
}

function atualizarLista() {
    const listaNome = document.getElementById('listaNome');
    listaNome.innerHTML = '';

    nomes.forEach((nomeValido, index) => {
        const li = document.createElement('li');
        li.textContent = nomeValido;

        const botaoRemover = document.createElement('button');
        botaoRemover.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        botaoRemover.classList.add('btn-remover');
        botaoRemover.onclick = () => {
            nomes.splice(index, 1);
            atualizarLista();
        };

        li.appendChild(botaoRemover);
        listaNome.appendChild(li);
    });
}



function sortearNome() {
    if (nomes.length === 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Adicione ao menos um nome antes de sortear!'
        });
        return;
    }

    Swal.fire({
        title: 'Sorteando...',
        html: 'Aguarde um momento',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    setTimeout(() => {
        const nomeAleatorio = Math.floor(Math.random() * nomes.length);
        const selecionandoNome = nomes[nomeAleatorio];

        Swal.fire({
            icon: 'success',
            title: 'Nome sorteado!',
            text: `Sorteado: ${selecionandoNome}`
        });

        document.getElementById('resultado').textContent = `Sorteado: ${selecionandoNome}`;
    }, 10000);
}



