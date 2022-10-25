window.addEventListener('load', () => {
    const form = document.querySelector('#formulario')
    const usuario = document.getElementById('usuario')
    const email = document.getElementById('email')
    const pass = document.getElementById('pass')
    const passConfirma = document.getElementById('passConfirma')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = () => {
        //capturar los valores ingresados por el usuario
        const usuarioValor = usuario.value.trim()
        const emailValor = email.value.trim()
        const passValor = pass.value.trim()
        const passConfirmaValor = passConfirma.value.trim();


        //(!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)
        //validando campo usuario

        if (usuarioValor === '') {
            console.log('CAMPO VACIO')
            validacionFalla(usuario, 'Campo vacío')
        } else {
            validaOK(usuario)
        }

        //validando campo email
        if (!emailValor) {

            validacionFalla(email, 'Campo vacio')
        }

    }

    const validacionFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }

    const validaOK = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }


})