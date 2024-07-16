import './Proyect.css'

const Proyects = () => {


    return(
        <section class="portfolio" id="portfolioid">
            <section class="portfolio-content">
                <h2>Échale un vistazo a mis proyectos</h2>
                <p class="descripcion">Estos son algunos ejemplos de proyectos que he desarrollado. Revisandolos podrás entender mejor la forma en la que trabajo el código y los resultados alcanzados</p>
                <a href="https://github.com/SantinoEscoriaza" target="_blank"><button class="botonRojo">Ver más</button></a>
            </section>
            {/* <!-- PROYECTO 1 --> */}
            <a class="proyecto pr1" href="https://santinoescoriaza.github.io/image-based-web-project/" target="_blank">
                <section class="proyect-content">
                    <h3>Landing Page Nº1</h3>
                    <p class="descripcion">Proyecto basado en recrear un diseño de referencia usando Html5 y Css3</p>
                    <span>Ver proyecto</span>
                </section>
                <img src="img/imgProyect1.png" alt="proyecto1img"/>
            </a>
            {/* <!-- PROYECTO 2 --> */}
            <a class="proyecto pr2" href="https://santinoescoriaza.github.io/image-based-web-project2/" target="_blank">
                <section class="proyect-content">
                    <h3>Landing Page Nº2</h3>
                    <p class="descripcion">Proyecto basado en recrear un diseño de referencia usando Html5 y Css3</p>
                    <span>Ver proyecto</span>
                </section>
                <img src="img/imgProyect2.png" alt="proyecto2img"/>
            </a>
            {/* <!-- // SELECTORES PARA CELULARES // --> */}
            <div class="selectoresProyecto">
                <button class="botonRojo botonSelect"><i class="bi bi-arrow-left"></i></button>
                <hr class="selectProyecto selected"></hr>
                <hr class="selectProyecto"></hr>
                <button class="botonRojo botonSelect"><i class="bi bi-arrow-right"></i></button>
            </div>
        </section>
    )
}

export default Proyects