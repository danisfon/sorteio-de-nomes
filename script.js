let numeros = [];

function adicionarNumero() {
    const numero = document.getElementById('numero');
    const numeroValido = numero.value.trim();

    if (!numeroValido) {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vazio',
            text: 'Digite um número válido!'
        });
        return;
    }

    const existe = numeros.some(n => n.toLowerCase() === numeroValido.toLowerCase());

    if (existe) {
        Swal.fire({
            icon: 'error',
            title: 'Número duplicado!',
            text: `"${numeroValido}" já foi adicionado à lista!`
        });
        numero.value = '';
        numero.focus();
        return;
    }

    numeros.push(numeroValido);
    atualizarLista();
    numero.value = '';
    numero.focus();
}


function atualizarLista() {
    const listaNumero = document.getElementById('listaNumero');
    listaNumero.innerHTML = '';

    numeros.forEach((numeroValido, index) => {
        const li = document.createElement('li');
        li.textContent = numeroValido;

        const botaoRemover = document.createElement('button');
        botaoRemover.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        botaoRemover.classList.add('btn-remover');

        botaoRemover.onclick = () => {
            numeros.splice(index, 1);
            atualizarLista();
        };

        li.appendChild(botaoRemover);
        listaNumero.appendChild(li);
    });
}



// function sortearNumero() {
//     if (numeros.length === 0) {
//         Swal.fire({
//             icon: 'warning',
//             title: 'Oops...',
//             text: 'Adicione ao menos um numero antes de sortear!'
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
//         const numeroAleatorio = Math.floor(Math.random() * numeros.length);
//         const selecionandoNumero = numeros[numeroAleatorio];
//
//         Swal.fire({
//             icon: 'success',
//             title: 'Número sorteado!',
//             text: `Sorteado: ${selecionandoNumero}`
//         });
//
//         document.getElementById('resultado').textContent = `Sorteado: ${selecionandoNumero}`;
//     }, 10000);
// }



function sortearNumero() {
    if (numeros.length === 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Adicione ao menos um numero antes de sortear!'
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
        const numeroAleatorio = Math.floor(Math.random() * numeros.length);
        const selecionandoNumero = numeros[numeroAleatorio];

        Swal.fire({
            title: 'Número sorteado!',
            text: `Sorteado: ${selecionandoNumero}`,
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
    }, 10000);
}

