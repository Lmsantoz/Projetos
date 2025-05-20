const calcular = document.getElementById('carregar')

function imc (){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const resultado = document.getElementById('resultado')
    const peso = document.getElementById('peso').value

    if(nome !== '' && altura !== '' && peso !== ''){
        
        const valorImc = (peso /(altura * altura))

        let classificaçao = ''

            if(valorImc < 18.5){
                classificaçao = 'abaixo do peso ideal'
            }else if(valorImc > 18.5 && valorImc < 24.9){
                classificaçao = 'com o peso ideal'
            }else{
                classificaçao = 'acima do peso'
            }

        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificaçao}`
    }else{
        resultado.textContent = 'preecha todos os campos '
    }

    
}

    

