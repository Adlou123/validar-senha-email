let email = document.getElementById('email')
let senha = document.getElementById('senha')
let mensagem = document.getElementById('mensagem')

function  acerto(){
     senha.style.border = 'solid 3px #00ff00'
}

function erro(){
    senha.style.border = 'solid 3px #ff2d00'
}

function  AcertoEmail(){
    senha.style.border = 'solid 3px #00ff00'
}

function ErroEmail(){
    senha.style.border = 'solid 3px #ff2d00'
}

document.getElementById('btn-login').addEventListener('click', function verificarsenha(){
    if(senha.value.length<8 ||
        !senha.value.match(/[a-z]/) ||
        !senha.value.match(/[A-Z]/) ||
        !senha.value.match(/[0-9]/) ||
        !senha.value.match(/[^a-zA-Z0-9]/)
    ){
    erro()
    } else {
    acerto()
    }
}
)

document.getElementById('btn-login').addEventListener(click, function verificarEmail(){
    if(email.value === 'eu@gmail.com'){
        AcertoEmail()
    } else {
        ErroEmail()
    }
})