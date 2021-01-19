$(function () {
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
        let id = 0;
        id = $("#buscar").serialize();
        console.log(id);
        $.ajax({
            type: "GET",
            url: "buscar.php",
            data: id,
            success: function (response) {
                $("#buscar").val('');
                let datos = JSON.parse(response);
                let template = "";
                datos.forEach(dato => {
                    template +=   
                    `
                    ${dato.user}
                    ${dato.pass} <br> `
                });
                
                $("#salida").html(template);                
            }
        });
    });
});