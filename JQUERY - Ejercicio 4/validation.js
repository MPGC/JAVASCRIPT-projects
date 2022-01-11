    $(function() {

	    jQuery.validator.addMethod("patron_contrasena", function(value, element) {
        return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(value);
    	}, "Debe tener 8-16 caracteres, números, mayúsculas y minúsculas, no símbolos especiales");
    	

    $('form').validate({            
        onfocusout: false,
        oninput: false,
        onkeyup: false,
        rules: {        
            nombre: {
                required: true,
                minlength: 3,
                maxlength: 20,
            },
            contrasenia: {
                required: true,
                patron_contrasena: true,
            },
            contrasenia2: {
                required: true,
                equalTo: "#contr",
            }
        },
        messages: {
            nombre: {
                required: "Por favor, introduzca su nombre",
                minlength: "Tiene que introducir 3 caracteres mínimo",
                maxlength: "El máximo número admisible de caracteres es 20",
            },
            contrasenia: {
                required: "Por favor, introduzca una contraseña",
            },
            contrasenia2: {
                required: "Por favor, confirme su contraseña",
                equalTo: "La contraseña no coincide",
            },
        }
    });

});

$(document).ready(function(){
    $(".campo").on("keyup blur",function(){
        $("form").validate().element("#"+$(this).attr("id"));
        $("#"+$(this).attr("id")+"-error").prepend("<i class='material-icons'>ERROR-></i>");
    });
    $("form").submit(function(event){
        event.preventDefault();
        if ($("form").valid()) {
            alert("Usuario admitido");
        } else {
            $("label.error").prepend("<i class='material-icons'>ERROR-></i>");
        }
    });
});