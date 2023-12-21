$(document).ready(function() {

$('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email:true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required:true
            }
            
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu e-mail',
            telefone: 'Por favor, insira o seu telefone',
            mensagem: 'Por favor, insira uma mensagem',
        },
        submitHandler: function(form) {
            alert("Mensagem enviada com sucesso!")

            form.reset();

        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }

    })
    
})