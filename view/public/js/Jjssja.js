
        function adjustSizes() {
            var header = document.querySelector("header");
            var uno = document.querySelector(".uno");
            var dos = document.querySelector(".dos");
            var tres = document.querySelector(".tres");

            var headerHeight = header.clientHeight;
            var windowWidth = window.innerWidth;

            // Ajusta el tamaño de los elementos en función del ancho de la ventana
            if (windowWidth > 768) { // Si es una pantalla más grande que una tablet
                uno.style.height = headerHeight * 0.70 + "px"; // Ajusta la altura del elemento uno
                dos.style.height = headerHeight * 1 + "px"; // Ajusta la altura del elemento dos
                tres.style.height = headerHeight * 0.75 + "px"; // Ajusta la altura del elemento tres
            } else { // Para pantallas más pequeñas (tablet y móvil)
                uno.style.height = headerHeight / 2.6 + "px"; // Restaura la altura del elemento uno
                dos.style.height = headerHeight / 1.3 + "px"; // Restaura la altura del elemento dos
                tres.style.height = headerHeight / 2.3 + "px"; // Restaura la altura del elemento tres
            }
        }

        // Llama a la función cuando se carga la página y cuando se redimensiona la ventana
        window.addEventListener("load", adjustSizes);
        window.addEventListener("resize", adjustSizes);



           // Obtén una referencia al elemento de la barra lateral
           const sidebar = document.querySelector('.sidebar');

           // Función para ocultar la barra lateral
           function ocultarSidebar() {
               sidebar.style.display = 'none';
           }
   
   // Llama a la función cuando se hace clic en un botón o en otro evento

   



   function adjustImages() {
    const containerWidth = document.querySelector('.image-container').offsetWidth;
    const images = document.querySelectorAll('.image-container img');

    images.forEach(img => {
        if (img.classList.contains('imagen')) {
            img.style.width = `${containerWidth / 3}px`;
            img.style.height = 'auto';
            if (containerWidth <= 480) {
                img.style.maxHeight = '65px';
                img.style.maxWidth = '65px';
            } else {
                img.style.maxHeight = '100px';
                img.style.maxWidth = '100px';
            }
        } else {
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            const newHeight = containerWidth / 3 / aspectRatio;

            img.style.width = `${containerWidth / 3}px`;
            img.style.height = `${newHeight}px`;
        }
    });
}

// Adjust images initially and whenever the window is resized
adjustImages();
window.addEventListener('resize', adjustImages);




 // Desactivar el menú contextual del botón derecho
 document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

