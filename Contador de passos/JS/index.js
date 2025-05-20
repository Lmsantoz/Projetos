function calcular(){
    let start = document.getElementById('inicio')
    let end = document.getElementById('fim')
    let step = document.getElementById('passo')
    let text = document.getElementById('txt')

    if (step.value.lenght == 0 || end.value.lenght == 0 || start.value.lenght == 0){
        window.alert('ERRO insira numeros validos para a contagem')
    } else {
        text.innerHTML = 'contando: '
        let s = Number(start.value)
        let e = Number(end.value)
        let p = Number(step.value)
        if(s < e){
            for(let c = s; c <= e; c += p){
            text.innerHTML += ` ${c} \u{1F449}`
        }
        }
        else{
            for( let c = s; c >= e; c -= p){
                text.innerHTML += `${c} \u{1F449}`
            }
            
        }
        text.innerHTML += `\u{1F3C1}`
            
    }
       
}

