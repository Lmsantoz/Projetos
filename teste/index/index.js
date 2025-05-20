//treinando javascript

function carregar() {
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora > 0 && hora < 12){
        // BOM DIA
        img.src = 'IMG/amanhecer.jpg'
        document.body.style.background = "#eccf6f"
        msg2.innerHTML = `Bom Dia!`
    }else if(hora > 12 && hora < 18){
        // BOA TARDE
        img.src = 'IMG/entarecer.jpg'
        document.body.style.background = "#fc892b"
        msg2.innerHTML = `Boa Tarde!`
    }else{
        // BOA NOITE
        img.src = 'IMG/anoitecer.jpg'
        document.body.style.background = "#393849"
        msg2.innerHTML = `Boa Noite!`
    }
}