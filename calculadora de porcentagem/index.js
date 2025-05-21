function calcular(){
    let count = document.getElementById('conta').value
    let porcentagem = document.getElementById('percent').value
    let RR = document.getElementById('Nres')

    if(count <= 0){
        window.alert('ERRO sua conta esta sem valor')
    }else if(porcentagem <= 0){
        window.alert('ERRO sem porcentagem de garçom')
    }else{
        let ress = (porcentagem / 100)
        let ret = (ress * count) 
        let reet = Number(ret) + Number(count)
        RR.innerHTML = `Valor: ${reet}`

    }
}
