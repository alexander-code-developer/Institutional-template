document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".link-con-transicion");

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(event) {
            event.preventDefault();
            
            var link = this;

            // Agregar la clase de animación (por ejemplo, "animacion-salida")
            link.classList.add("animacion-salida");

            // Esperar a que termine la animación
            setTimeout(function() {
                // Redirigir a la URL del enlace
                window.location.href = link.getAttribute("href");
            }, 300); // Ajusta el tiempo al mismo valor que la duración de la animación en CSS
        });
    }
});
