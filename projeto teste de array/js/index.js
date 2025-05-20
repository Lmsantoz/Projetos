let num = document.querySelector('input#numb')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#camptxt2')

let valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${valores} adicionado`
        lista.appendChild(item)
    }else{
        alert('valor invalido ou ja encontrado na lista')
    }


}