function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.Value == 0 || Number(fano.value) > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
   }else{
    var fsex = document.getElementsByName('radsex')

    var idade = ano - Number(fano.value)

    var gênero = ''

    var img = document.createElement('img')

    img.setAttribute('id', 'foto')

    img.setAttribute('src', '.verificador de idade/projetoV/IMG/bebe-adulto.png')

    res.innerHTML = `idade calculada ${idade}`
        if(fsex[0].checked){

            gênero = 'Homem'

            if(idade >= 0 && idade < 5){
                img.setAttribute('src', 'bebe-homem.jpg')
                //bebe
            }else if(idade >= 5 && idade < 10 ){
                img.setAttribute('src', 'crianca-homem.jpg')
                //criança
            }else if(idade > 10 && idade < 17){
                img.setAttribute('src', 'adolecente-homem.jpg')
                //adolecente
            }else if(idade > 17 && idade < 45 ){
                img.setAttribute('src', 'adulto-homem.jpg')
                //adulto
            }else if(idade > 45){
                img.setAttribute('src', 'idoso-homem.jpg')
            } 
        }else if (fsex[1].checked){
            
            gênero = 'Mulher'

            if(idade >= 0 && idade < 5){
                img.setAttribute('src', 'bebe-homem.jpg')
                //bebe
            }else if(idade >= 5 && idade < 10 ){
                img.setAttribute('src', 'crianca-homem.jpg')
                //criança
            }else if(idade > 10 && idade < 17){
                img.setAttribute('src', 'adolecente-homem.jpg')
                //adolecente
            }else if(idade > 17 && idade < 45 ){
                img.setAttribute('src', 'adulto-homem.jpg')
                //adulto
            }else if(idade > 45){
                img.setAttribute('src', 'idoso-homem.jpg')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}
