
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
        bgColor='#000000' 
        id="headerid"
        color='white'>
            {/* /// LOGO /// */}
            <Link ml='60px' href="#">
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
            border='1px solid #ffffff'
            borderRadius='2px'
            color='white'
            bgColor='transparent'
            transition='0.5s'
            _hover={{
                color:'#000000',
                bgColor:'#ffffff',
                cursor:'pointer'
                }}>
                    Contrátame
            </Button>
        {/* /// BOTON MENU SANDWICH PARA CELULARES /// */}
            <Button 
            display={{ base:'block', md:'none'}}
            mr='60px' p='5px 15px'
            color='#ffffff'
            bgColor='transparent'
            border='solid 1px #ffffff'
            borderRadius='border-radius: 4px'
            transition='0.3s'
            _hover={{
                color:'#f92139',
                border:'solid 1px #f92139'
                }}>
                    <i className="bi bi-three-dots"></i>
            </Button>
    </Flex>
    )
}

export default Header