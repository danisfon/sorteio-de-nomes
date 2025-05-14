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



// function sortearNome() {
//     if (nomes.length === 0) {
//         Swal.fire({
//             icon: 'warning',
//             title: 'Oops...',
//             text: 'Adicione ao menos um nome antes de sortear!'
//         });
//         return;
//     }
//
//     Swal.fire({
//         title: 'Sorteando...',
//         html: 'Aguarde um momento',
//         allowOutsideClick: false,
//         didOpen: () => {
//             Swal.showLoading();
//         }
//     });
//
//     setTimeout(() => {
//         const nomeAleatorio = Math.floor(Math.random() * nomes.length);
//         const selecionandoNome = nomes[nomeAleatorio];
//
//         Swal.fire({
//             icon: 'success',
//             title: 'Número sorteado!',
//             text: `Sorteado: ${selecionandoNome}`
//         });
//
//         document.getElementById('resultado').textContent = `Sorteado: ${selecionandoNome}`;
//     }, 10000);
// }



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
            title: 'Número sorteado!',
            text: `Sorteado: ${selecionandoNome}`,
            didOpen: () => {
                const myConfetti = confetti.create(null, {
                    resize: true,
                    useWorker: true
                });

                myConfetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { y: 0.6 }
                });

                setTimeout(() => {
                    const canvas = document.querySelector('canvas');
                    if (canvas) {
                        canvas.style.position = 'fixed';
                        canvas.style.top = '0';
                        canvas.style.left = '0';
                        canvas.style.pointerEvents = 'none';
                        canvas.style.zIndex = '9999';
                    }
                }, 50);
            }
        });

        document.getElementById('resultado').textContent = `Sorteado: ${selecionandoNome}`;
    }, 10000);
}

