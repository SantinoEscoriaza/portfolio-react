import './About.css'

const About = () => {


    return(
    <section class="about" id="aboutid">
        <h2>Sobre mi</h2>
        <img src="img/imgAbout.jpeg" alt="foto"/>
        <section class="textAbout">
            <p class="descripcion">Tengo 18 años y soy de Argentina. Tengo experiencia en el desarrollo de páginas web. Estudio Ingeniería en sistemas en la Universidad Tecnológica Nacional, y tengo mucho interés en el mundo de la programación y el manejo de datos.</p>
            <p class="descripcion">Estoy capacitado en el desarrollo de sitios web desde 0, manejando tecnologias de front-end y back-end que se complementan con el manejo de ciertas herramientas de diseño grafico para poder ofrecer un servicio lo mas completo</p>
        </section>
        {/* <!-- BOTONES --> */}
        <a href="" class="a_margin"><button class="botonRojo">Descargar CV</button></a>
        <a href="#contactid" class="a_margin"><button class="botonRojo">Contrátame</button></a>
        {/* <!-- ICONOS --> */}
        <section class="icons">
            <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook redSocialIcon"></i></a>
            <a href="https://www.instagram.com" target="_blank"><i class="bi bi-instagram redSocialIcon"></i></a>
            <a href="https://www.x.com" target="_blank"><i class="bi bi-twitter redSocialIcon"></i></a>
            <a href="https://www.linkedin.com/in/santino-escoriaza-6833b8311/" target="_blank"><i class="bi bi-linkedin redSocialIcon"></i></a>
        </section>
    </section>
    )
}

export default About