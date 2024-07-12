import './Header.css'

const Header = () => {

    return(
    <header class="header" id="headerid">
            <img src="icons/logoPortfolio.svg" alt="miLogo" class="logo"/>
            <nav class="navbar">
                <a href="#inicio">Inicio</a>
                <a href="#aboutid">Sobre mi</a>
                <a href="#skillsid">Habilidades</a>
                <a href="#portfolioid">Proyectos</a>
                <a href="#testimoniosid">Testimonios</a>
                <a href="#contactid">Contáctame</a>
            </nav>
            <a href="#contactid"><button class="botonBlanco">Contrátame</button></a>
        {/* <!-- // BOTON MENU SANDWICH PARA CELULARES // --> */}
            <button class="botonMenu"><i class="bi bi-three-dots"></i></button>
    </header>
    )
}

export default Header