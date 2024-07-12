import './Testimonios.css'

const Testimonios = () => {


    return(
        <section class="testimonios" id="testimoniosid">
            {/* <!-- // CONTENEDOR CON IMAGEN // --> */}
            <section class="imgCeoContainer">
                <img src="img/jackPearson.jpg" alt="ceoNombre" class="ceoFoto"/>
            </section>
            {/* <!-- // CONTENEDOR DE TEXTO // --> */}
            <section class="TestContainer">
                <h2>Testimonios</h2>
                <p class="descripcion testimonio">"Su incorporación al equipo de trabajo fue todo un cambio de perspectiva. Más allá de su aporte personal, Santino hizo que el equipo trabaje de manera más eficaz, al ayudarles a hacer mejor foco en cada pequeño detalle y llegar a resultados no solo mejores visualmente, sino realizados de manera más ordenada."</p>
                <p class="nombreCeo">Jack Pearson</p>
            {/* <!-- // SELECTORES DE TESTIMONIO // --> */}
                <div class="selectores">
                    <button class="botonRojo botonSelect"><i class="bi bi-arrow-left"></i></button>
                    <hr class="selecTestimonio selected"></hr>
                    <hr class="selecTestimonio"></hr>
                    <hr class="selecTestimonio"></hr>
                    <button class="botonRojo botonSelect"><i class="bi bi-arrow-right"></i></button>
                </div>
            </section>
        </section>
    )
}

export default Testimonios