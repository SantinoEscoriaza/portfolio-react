import './Contact.css'

const Contact = () => {


    return(
        <section class="contact" id="contactid">
            <h2>Ponte En Contacto</h2>
            {/* <!-- BOTONES CONTACTO --> */}
            <section class="botonesContacto">
                <a href="https://www.gmail.com" target="_blank"><button class="botonContact"><i class="bi bi-envelope-fill"><br/></i>santinoescoriaza@gmail.com</button></a>
                <a href="https://www.whatsapp.com" target="_blank"><button class="botonContact"><i class="bi bi-telephone-fill"></i><br/>(+54) 261-264-1158</button></a>
             </section>
            {/* <!-- FORMULARIO CONTACTO --> */}
            <form class="formContact" action="">
                <input type="text" placeholder="Tu nombre" class="textInput inpNombreMail" name="nombre"/>
                <input type="text" placeholder="Tu email" class="textInput inpNombreMail" name="mail"/>
                <input type="text" placeholder="Asunto" class="textInput inpAsunto" name="asunto"/>
                <textarea placeholder="Mensaje" class="textInput inpMensaje" name="mensaje"></textarea>
                <button class="botonRojo botonEnviar">Enviar mensaje</button>
                    {/* <!-- ICONOS --> */}
                    <section class="icons">
                        <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook redSocialIcon"></i></a>
                        <a href="https://www.instagram.com" target="_blank"><i class="bi bi-instagram redSocialIcon"></i></a>
                        <a href="https://www.x.com" target="_blank"><i class="bi bi-twitter redSocialIcon"></i></a>
                        <a href="https://www.linkedin.com/in/santino-escoriaza-6833b8311/" target="_blank"><i class="bi bi-linkedin redSocialIcon"></i></a>
                    </section>
            </form>
        </section>
    )
}

export default Contact