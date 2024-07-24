
import { Button, Flex, Link, Img } from "@chakra-ui/react"

const Header = () => {

// Estilos reutilizables para los links, todos comparten los mismos
    const linkStyles = {
        w:{ base:'30%', lg:'fit-content'},
        textAlign:'center',
        fontSize:'18px',
        textDecoration:'none', 
        transition:'0.2s',
        _hover:{fontWeight:'bold', textDecoration:'underline'}
    }

    ///////////// RETORNO /////////////
    return(
    /// HEADER ///
    <Flex as='header' 
        p={'26px 0px'} 
        justify={{base:'space-between', md:'center'}} 
        align='center' 
        bgColor='var(--bg-color-1)' 
        id="headerid"
        color='white'>
            {/* /// LOGO /// */}
            <Link m={{base:'0px 60px', md:'0px'}} href="#">
                <Img src='./icons/logoPortfolio.svg' alt="miLogo" w='50px'/>
            </Link>
            {/* /// NAVBAR /// */}
            <Flex as='navbar' 
            display={{ base:'none', md:'flex'}}
            w='70%' 
            wrap={{ base:'wrap', lg:'nowrap'}}
            justify='center' 
            gap='20px'>
                <Link sx={linkStyles} href="#inicio">Inicio</Link>
                <Link sx={linkStyles} href="#aboutid">Sobre mi</Link>
                <Link sx={linkStyles} href="#skillsid">Habilidades</Link>
                <Link sx={linkStyles} href="#portfolioid">Proyectos</Link>
                <Link sx={linkStyles} href="#testimoniosid">Testimonios</Link>
                <Link sx={linkStyles} href="#contactid">Contáctame</Link>
            </Flex>
            {/* /// CONTRATAME BUTTON /// */}
            <Button
            display={{ base:'none', md:'block'}}
            p='8px 36px'
            border='1px solid var(--secondary-color)'
            borderRadius='2px'
            color='white'
            bgColor='rgba(0,0,0,0)'
            transition='0.5s'
            _hover={{
                color:'var(--bg-color-1)',
                bgColor:'rgba(256, 256, 256, 1)',
                cursor:'pointer'
                }}>
                    Contrátame
            </Button>
        {/* /// BOTON MENU SANDWICH PARA CELULARES /// */}
            <Button 
            display={{ base:'block', md:'none'}}
            m='0px 60px' p='5px 15px'
            color='var(--secondary-color)'
            bgColor='transparent'
            border='solid 1px var(--secondary-color)'
            borderRadius='border-radius: 4px'
            transition='0.3s'
            _hover={{
                color:'var(--primary-color)',
                border:'solid 1px var(--primary-color)'
                }}>
                    <i class="bi bi-three-dots"></i>
            </Button>
    </Flex>
    )
}

export default Header