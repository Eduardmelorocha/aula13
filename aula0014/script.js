function carregar()   {

var img = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    //Bom dia
    img.src = '../img/manha.png'
    document.body.style.background = '#FE8A00'
} else if (hora > 12 && hora <= 18){
    ///Boa tarde
    img.src = '../img/tarde.png'
    document.body.style.background = '#70B4D1'
} else{
    //boa noite
    img.src = '../img/noite.png'
    document.body.style.background = '#1D1411'
}

}


