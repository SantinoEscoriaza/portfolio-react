
import { Button, Flex, Link, Img } from "@chakra-ui/react"
import { MenuBoton } from "./MenuBoton.jsx"

const Header = () => {

// Estilos reutilizables para los links, todos comparten los mismos
    const linkStyles = {
        w:{base:'30%', lg:'fit-content'},
        textAlign:'center',
        fontSize:{base:'18px', '2xl':'22px', '3xl':'28px'},
        textDecoration:'none', 
        transition:'0.2s',
        _hover:{fontWeight:'bold', textDecoration:'underline'}
    }

    ///////////// RETORNO /////////////
    return(
    /// HEADER ///
    <Flex as='header' 
        position='fixed'
        w='100%'
        zIndex='1'
        p={{base:'16px 0px', '2xl':'20px 0px', '3xl':'24px 0px'}}
        justify={{base:'space-between', md:'center'}} 
        align='center' 
        bgColor='#000000' 
        id="headerid"
        color='white'>

            {/* /// LOGO /// */}
            <Link ml='60px' href="#">
                <Img src='./icons/logoPortfolio.svg' alt="miLogo" 
                w={{
                    base:'50px', 
                    '2xl':'60px', 
                    '3xl':'70px'
                }}/>
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
            <Link href='#contactid' _hover={{textDecoration:'none'}}>
                <Button
                textDecoration='none'
                display={{ base:'none', md:'block'}}
                p={{base:'8px 36px', '2xl':'10px 36px', '3xl':'12px 36px'}}
                fontSize={{base:'16px', '2xl':'20px', '3xl':'26px'}}
                h='fit-content'
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
            </Link>
        {/* /// BOTON MENU SANDWICH PARA CELULARES /// */}
            <MenuBoton/>
    </Flex>
    )
}

export default Header