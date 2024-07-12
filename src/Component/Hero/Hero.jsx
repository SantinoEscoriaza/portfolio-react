import './Hero.css'

const Hero = () => {


    return(
        <section class="hero" id="inicio">
            <section class="divHero">
                <h1>Hola! Soy Santino Escoriaza</h1>
                <p class="descripcion">Soy estudiante de programación y en esta página encontrarás todo lo que necesitas saber sobre mi desempeño en la programación, mis proyectos y mis redes sociales.</p>
                <a href=""><button class="botonRojo">Descargar CV</button></a>
            </section>
            <img src="img/imgFondoHero.png" alt="Imagen de presentacion" class="imgFondoHero"/>
        </section>
    )
}

export default Hero