function carregar() {
    let number = parseInt(document.getElementById('numero').value);
    let txt = document.getElementById('tabuada');

    // Limpar conteúdo anterior
    txt.innerHTML = '';

    // Verifica se é número válido
    if (isNaN(number)) {
        txt.innerHTML = 'Digite um número válido.';
        return;
    }

    for (let i = 1; i <= 10; i++) {
        txt.innerHTML += `${number} x ${i} = ${number * i}<br>`;
    }
}
