const head = document.querySelector('head');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const backToTopButton = document.getElementById("backToTopBtn");

// Mostrar el botón cuando se haya hecho scroll
window.addEventListener("scroll", () => {
if (window.scrollY > 300) {
backToTopButton.classList.add("visible");
} else {
backToTopButton.classList.remove("visible");
}
});

// Volver arriba cuando se hace clic en el botón
backToTopButton.addEventListener("click", () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});



header.innerHTML = `
<div class="uno"></div>
<div class="dos"></div>
<div class="tres"></div>
`;

nav.innerHTML = `
<section class="elementor-element elemento_one  elementor-section">
    <div class="elementor-container">
        <div class="elementor-column  e
         elementor-element  elemento_contenido_principal" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-fadd60c menu_justificado  hfe-link-redirect-child hfe-nav-menu__breakpoint-tablet elementor-widget "
                    data-id="fadd60c" data-element_type="widget" data-widget_type="navigation-menu.default">
                    <div class="elementor-widget-container">
                        <div class="hfe-nav-menu hfe-layout-horizontal hfe-nav-menu-layout horizontal hfe-pointer__framed hfe-animation__draw"
                            data-layout="horizontal">
                            <div class="hfe-nav-menu__toggle elementor-clickable">
                                <div class="hfe-nav-menu-icon">
                                    <i aria-hidden="true" tabindex="0" class="fas fa-bars"></i>
                                </div>
                            </div>
                            <nav class="layaut_hori"
                                data-toggle-icon="&lt;i aria-hidden=&quot;true&quot; tabindex=&quot;0&quot; class=&quot;fas fa-bars&quot;&gt;&lt;/i&gt;"
                                data-close-icon="&lt;i aria-hidden=&quot;true&quot; tabindex=&quot;0&quot; class=&quot;fas fa-window-close&quot;&gt;&lt;/i&gt;"
                                data-full-width="yes">
                                <ul id="menu-1-fadd60c" class="hfe-nav-menu">
                                    <li class="menu-item primero_men ">
                                        <a href="index.html" class="style_color"> <i class="fas fa-university">
                                                Inicio</a></i>
                                    </li>
                                    <li id="menu-item-515"
                                        class="menu-item menu-item-type-custom hfe-has-submenu man_chil_one primero_men ">
                                        <div class="hfe-has-submenu-container">
                                            <a href="#" class="style_color">
                                                || pon aqui el nombre
                                            </a>
                                        </div>
                                        <ul class="sub-menu">
                                            <li class="borde_color_text">
                                                <a href="#" class="color_let">
                                                   Aqui pon tu menu</a>
                                            </li>
                                            <li class="borde_color_text">
                                                <a href="#" class="color_let">
                                                   Aqui pon tu menu</a>
                                            </li>
                                            <li class="borde_color_text">
                                                <a href="#" class="color_let">
                                                   Aqui pon tu menu</a>
                                            </li>
                                            <li class="borde_color_text">
                                                <a href="#" class="color_let">
                                                   Aqui pon tu menu</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-531"
                                        class="menu-item menu-item-type-custom  man_chil_one primero_men hfe-has-submenu">
                                        <div class="hfe-has-submenu-container">
                                            <a href="#" class="style_color">
                                                || pon aqui el nombrerta
                                                <span class='hfe-menu-toggle sub-arrow hfe-menu-child-0'>
                                                </span>
                                            </a>
                                        </div>
                                        <ul class="sub-menu">
                                        <li class="borde_color_text">
                                        <a href="#" class="color_let">
                                           Aqui pon tu menu</a>
                                    </li>
                                    <li class="borde_color_text">
                                                <a href="#" class="color_let">
                                                   Aqui pon tu menu</a>
                                            </li>
                                            <li class="borde_color_text">
                                                <a href="#" class="color_let">
                                                   Aqui pon tu menu</a>
                                            </li>
                                            <li class="borde_color_text">
                                                <a href="#" class="color_let">
                                                   Aqui pon tu menu</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-10738" class="menu-item man_chil_one primero_men hfe-has-submenu">
                                        <div class="hfe-has-submenu-container">
                                            <a href="#" class="style_color">
                                                || pon aqui el nombreantes
                                            </a>
                                        </div>
                                        <ul class="sub-menu">
                                        <li class="borde_color_text">
                                        <a href="#" class="color_let">
                                           Aqui pon tu menu</a>
                                    </li>
                                    <li class="borde_color_text">
                                                <a href="#" class="color_let">
                                                   Aqui pon tu menu</a>
                                            </li>
                                            <li class="borde_color_text">
                                                <a href="#" class="color_let">
                                                   Aqui pon tu menu</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        class="menu-item menu-item-type-custom  man_chil_one primero_men hfe-has-submenu">
                                        <div class="hfe-has-submenu-container">
                                            <a href="#" class="style_color">
                                                || pon aqui el nombrentes
                                                <span class='hfe-menu-toggle sub-arrow hfe-menu-child-0'>

                                                </span>
                                            </a>
                                        </div>
                                        <ul class="sub-menu">
                                        <li class="borde_color_text">
                                        <a href="#" class="color_let">
                                           Aqui pon tu menu</a>
                                    </li>
                                    <li class="borde_color_text">
                                                <a href="#" class="color_let">
                                                   Aqui pon tu menu</a>
                                            </li>
                                            <li class="menu-item menu-item-type-custom  man_chil_one hfe-has-submenu">
                                                <div class="hfe-has-submenu-container">
                                                    <a href="#" class="color_let">
                                                       Sub menu del menu ▶

                                                    </a>
                                                </div>
                                                <ul class="sub-menu">
                                                    <li class="borde_color_text">
                                                        <a href="#"
                                                            class="color_let">Pon tu submenu</a>
                                                    </li>
                                                    <li class="borde_color_text">
                                                    <a href="#"
                                                        class="color_let">Pon tu submenu</a>
                                                </li>
                                                <li class="borde_color_text">
                                                <a href="#"
                                                    class="color_let">Pon tu submenu</a>
                                            </li>
                                                    
                                                </ul>
                                            </li>
                                            <li class="borde_color_text">
                                            <a href="#" class="color_let">
                                               Aqui pon tu menu</a>
                                        </li>
                                        </ul>
                                    </li>

                                   
                                    <li id="menu-item-515"
                                    class="menu-item menu-item-type-custom hfe-has-submenu man_chil_one primero_men ">
                                    <div class="hfe-has-submenu-container">
                                        <a href="#" class="style_color">
                                            || pon aqui el nombre
                                        </a>
                                    </div>
                                    <ul class="sub-menu">
                                        <li class="borde_color_text">
                                            <a href="#" class="color_let">
                                               Aqui pon tu menu</a>
                                        </li>
                                        <li class="borde_color_text">
                                            <a href="#" class="color_let">
                                               Aqui pon tu menu</a>
                                        </li>
                                        <li class="borde_color_text">
                                            <a href="#" class="color_let">
                                               Aqui pon tu menu</a>
                                        </li>
                                        <li class="borde_color_text">
                                            <a href="#" class="color_let">
                                               Aqui pon tu menu</a>
                                        </li>
                                    </ul>
                                </li>
                                <li id="menu-item-515"
                                class="menu-item menu-item-type-custom hfe-has-submenu man_chil_one primero_men ">
                                <div class="hfe-has-submenu-container">
                                    <a href="#" class="style_color">
                                        || pon aqui el nombre
                                    </a>
                                </div>
                                <ul class="sub-menu">
                                    <li class="borde_color_text">
                                        <a href="#" class="color_let">
                                           Aqui pon tu menu</a>
                                    </li>
                                    <li class="borde_color_text">
                                        <a href="#" class="color_let">
                                           Aqui pon tu menu</a>
                                    </li>
                                    <li class="borde_color_text">
                                        <a href="#" class="color_let">
                                           Aqui pon tu menu</a>
                                    </li>
                                    <li class="borde_color_text">
                                        <a href="#" class="color_let">
                                           Aqui pon tu menu</a>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-515"
                            class="menu-item menu-item-type-custom hfe-has-submenu man_chil_one primero_men ">
                            <div class="hfe-has-submenu-container">
                                <a href="#" class="style_color">
                                    || pon aqui el nombre
                                </a>
                            </div>
                            <ul class="sub-menu">
                                <li class="borde_color_text">
                                    <a href="#" class="color_let">
                                       Aqui pon tu menu</a>
                                </li>
                                <li class="borde_color_text">
                                    <a href="#" class="color_let">
                                       Aqui pon tu menu</a>
                                </li>
                                <li class="borde_color_text">
                                    <a href="#" class="color_let">
                                       Aqui pon tu menu</a>
                                </li>
                                <li class="borde_color_text">
                                    <a href="#" class="color_let">
                                       Aqui pon tu menu</a>
                                </li>
                            </ul>
                        </li>
                                   
                                    
                        <li id="menu-item-515"
                        class="menu-item menu-item-type-custom hfe-has-submenu man_chil_one primero_men ">
                        <div class="hfe-has-submenu-container">
                            <a href="#" class="style_color">
                                || pon aqui el nombre
                            </a>
                        </div>
                        <ul class="sub-menu">
                            <li class="borde_color_text">
                                <a href="#" class="color_let">
                                   Aqui pon tu menu</a>
                            </li>
                            <li class="borde_color_text">
                                <a href="#" class="color_let">
                                   Aqui pon tu menu</a>
                            </li>
                            <li class="borde_color_text">
                                <a href="#" class="color_let">
                                   Aqui pon tu menu</a>
                            </li>
                            <li class="borde_color_text">
                                <a href="#" class="color_let">
                                   Aqui pon tu menu</a>
                            </li>
                        </ul>
                    </li>
                    <li id="menu-item-515"
                    class="menu-item menu-item-type-custom hfe-has-submenu man_chil_one primero_men ">
                    <div class="hfe-has-submenu-container">
                        <a href="#" class="style_color">
                            || pon aqui el nombre
                        </a>
                    </div>
                    <ul class="sub-menu">
                        <li class="borde_color_text">
                            <a href="#" class="color_let">
                               Aqui pon tu menu</a>
                        </li>
                        <li class="borde_color_text">
                            <a href="#" class="color_let">
                               Aqui pon tu menu</a>
                        </li>
                        <li class="borde_color_text">
                            <a href="#" class="color_let">
                               Aqui pon tu menu</a>
                        </li>
                        <li class="borde_color_text">
                            <a href="#" class="color_let">
                               Aqui pon tu menu</a>
                        </li>
                    </ul>
                </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="elementor-element elementor-element-6aa8cf9 elementor-shape-circle e-grid-align-right elementor-grid-0 elementor-widget elementor-widget-social-icons"
                    data-id="6aa8cf9" data-element_type="widget" data-widget_type="social-icons.default">
                    <div class="elementor-widget-container">


                        <div class="elementor-social-icons-wrapper elementor-grid">
                            <span class="elementor-grid-item">
                                <a class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-animation-shrink elementor-repeater-item-0a0fc2b"
                                    href="https://www.facebook.com/profile.php?id=100063908867861" target="_blank">
                                    <span class="elementor-screen-only">Facebook</span>
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </span>
                            <span class="elementor-grid-item">
                                <a class="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-animation-shrink elementor-repeater-item-db2b086"
                                    href="#" target="_blank">
                                    <span class="elementor-screen-only">Youtube</span>
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </span>
                            <span class="elementor-grid-item">
                                <a class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-shrink elementor-repeater-item-e647a10"
                                    href="#" target="_blank">
                                    <span class="elementor-screen-only">Instagram</span>
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
`;



footer.innerHTML = `
<section>
    <section class="cetis-91">
        <h2>lorem lorem lorem</h2>
        <p>Queremos escuchar tus opiniones y sugerencias</p>
        <div class="button-container">
            <a class="cta-button" href="#" target="_blank">Ir al
                cuestionario</a>
        </div>
    </section>

    <!-- Contenido HTML del footer -->
    <section>
        <div class="main-container">
            <div class="container">
                <div id="ubicacion" class="box">
                    <h2> <i class="fas fa-map-marker-alt"></i> Ubicación </h2>
                    <p><a
                            href="link de tu ubicacion">
                           pon aqui la ubicacion de tu escuela, en este ejemplo cetis 91 </a></p>
                </div>
                <div class="box">
                    <h2><i class="fas fa-phone-alt"></i>Teléfono</h2>
                    <p class="nnn">Numeros Principales. 773xxxxxxx</p>
                </div>
                <div class="box">
                    <h2 id="text"> <i class="fas fa-envelope"></i>Correo electrónico</h2>
                    <p id="correo_tetx"><a class="text"
                            href="mailto:xxxxxxxxxxx@xxxxxxxx">xxxxxxxx@xxxxxxxx</a>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contenedor del mapa -->
    <div class="map-container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239872.04954711464!2d-99.55158748562177!3d20.050410306506446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d22d0daa7148e1%3A0x7057a90f77553874!2sTula%20de%20Allende%2C%20Hgo.!5e0!3m2!1ses!2smx!4v1717227018981!5m2!1ses!2smx"
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <!-- Contenido del footer (continuación) -->
    <div class="footer-container">
        <div class="left-content">
            © 2024 - nombre de tu escuela siglas. Todos los derechos reservados
        </div>
        <div class="right-content">
            <a href="#
">Políticas de privacidad y seguridad</a>
        </div>
    </div>
</section>
`;