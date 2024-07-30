import { Wrap, Button, Flex, Img, Link, Text } from '@chakra-ui/react'

const About = () => {

    const curriculumPath = '../../public/files/CurriculumEjemplo.pdf'

    return(
    <Wrap as='section' id="aboutid" 
    justify={'center'} align='center' 
    p={{base:'20px 10px 40px',
        lg:'0px 60px 40px'}}>
        <Text as='h2'>Sobre mi</Text>
        <Img w='28%' h='100%' 
        display={{base:'none', md:'block'}}
        m='0px 20px 40px 80px' 
        src="img/imgAbout.jpeg" alt="foto"/>
        <Text className='defaultText' 
        mb={{base:'24px'}}
        w={{base:'100%',md:'45%'}} 
        p='10px 40px'>
            <Text mb='16px' lineHeight={{base:'28px', md:'32px'}}>
                Tengo 18 años y soy de Argentina. Tengo experiencia en el desarrollo de páginas web. Estudio Ingeniería en sistemas en la Universidad Tecnológica Nacional, y tengo mucho interés en el mundo de la programación y el manejo de datos.
            </Text>
            <Text display={{base:'none', mid:'block'}} lineHeight='32px'>
                Estoy capacitado en el desarrollo de sitios web desde 0, manejando tecnologias de front-end y back-end que se complementan con el manejo de ciertas herramientas de diseño grafico para poder ofrecer un servicio lo mas completo
            </Text>
        </Text>
        {/* <!-- BOTONES --> */}
        <Link href={curriculumPath} download><Button id="redButton" m='0px 10px'>Descargar CV</Button></Link>
        <Link href='#contactid'><Button id="redButton" m='0px 10px'>Contrátame</Button></Link>
        {/* <!-- ICONOS --> */}
        <Flex className="icons">
            <Link as='a' href="https://www.facebook.com" target="_blank"><i className="bi bi-facebook"></i></Link>
            <Link as='a' href="https://www.instagram.com" target="_blank"><i className="bi bi-instagram"></i></Link>
            <Link as='a' href="https://www.x.com" target="_blank"><i className="bi bi-twitter"></i></Link>
            <Link as='a' href="https://www.linkedin.com/in/santino-escoriaza-6833b8311/" target="_blank"><i className="bi bi-linkedin"></i></Link>
            <Link as='a' href="https://github.com/SantinoEscoriaza/" target="_blank"><i className="bi bi-github"></i></Link>
        </Flex>
    </Wrap>
    )
}

export default About