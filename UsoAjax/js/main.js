$(function () {
    $(".salida").hide();
    listar();
    $("#Formulario").submit(function (e) {
        const data = $(this).serialize();
        console.log(data);
        $.ajax({
            type: "POST",
            url: "agregar.php",
            data: data,
            success: function (response) {
                console.log(response);
                listar();
                $("#Formulario").trigger("reset");
            }
        });
        e.preventDefault();
    });

    function listar() {
        $.ajax({
            type: "GET",
            url: "listar.php",
            success: function (response) {
                let datos = JSON.parse(response);
                let template = "";
                datos.forEach(dato => {
                    template +=
                        `<tr>
                        <td>${dato.user}</td>
                        <td>${dato.pass}</td>
                    </tr>
                    `
                });
                $("#cuerpo-tabla").html(template);
            }
        });
    }

    $(document).on("click", ".btnbuscar", function () {
        $(".salida").html("<span>No se encontro</span>");        
        let id = 0;
        id = $("#buscar").serialize();
        console.log(id);
        $.ajax({
            type: "GET",
            url: "buscar.php",
            data: id,
            success: function (response) {
                let datos = "";
                 datos = JSON.parse(response);
                console.log(datos);
                if (datos.length == 0) {
                    $(".salida").slideDown("slow");
                    setTimeout(function () {
                        $(".salida").slideUp("slow");
                    }, 3000);
                    $("#buscar").val('');                   
                } else {                    
                    let template = "";
                    datos.forEach(dato => {
                        template +=
                            `
                    ${dato.user}
                    ${dato.pass} <br> `
                    });                    
                    $(".salida").html(template);
                    $(".salida").slideDown("slow");                
                    $("#buscar").val('');                                  
                }
            }
        });
    });
    $( "#buscar" ).focus(function() {
        $(".salida").slideUp("slow");                
      });
});