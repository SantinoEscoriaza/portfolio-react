import { Flex, Link } from '@chakra-ui/react'

const Icons = () => {

    let iconsStyle = {
      color: '#000000',
      fontSize: {base:'20px', '2xl':'24px', '3xl':'30px'},
      textDecoration: 'none',
      transition: '0.3s',
      _hover:{
        color:'#f92139'
      }
    }

    return(
        <Flex 
        w= '100%'
        p= '30px 0px'
        display= 'flex'
        justify= 'center'
        aling= 'center'
        gap= '30px'>
            <Link as='a' sx={iconsStyle} href="https://www.facebook.com" target="_blank"><i className="bi bi-facebook"></i></Link>
            <Link as='a' sx={iconsStyle} href="https://www.instagram.com" target="_blank"><i className="bi bi-instagram"></i></Link>
            <Link as='a' sx={iconsStyle} href="https://www.x.com" target="_blank"><i className="bi bi-twitter"></i></Link>
            <Link as='a' sx={iconsStyle} href="https://www.linkedin.com/in/santino-escoriaza-6833b8311/" target="_blank"><i className="bi bi-linkedin"></i></Link>
            <Link as='a' sx={iconsStyle} href="https://github.com/SantinoEscoriaza/" target="_blank"><i className="bi bi-github"></i></Link>
        </Flex>
    )
}

export default Icons