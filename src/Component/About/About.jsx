import { Button, Flex, Img, Link, Text } from '@chakra-ui/react'

const About = () => {


    return(
    <Flex as='section' id="aboutid" wrap='wrap' justify={'center'} p={'0px 100px 40px 100px'}>
        <Text as='h2'>Sobre mi</Text>
        <Img w='35%' m='0px 20px 40px 80px' src="img/imgAbout.jpeg" alt="foto"/>
        <Text className='defaultText' w='45%' p='10px 40px'>
            <Text mb='16px' lineHeight='32px'>Tengo 18 años y soy de Argentina. Tengo experiencia en el desarrollo de páginas web. Estudio Ingeniería en sistemas en la Universidad Tecnológica Nacional, y tengo mucho interés en el mundo de la programación y el manejo de datos.</Text>
            <Text lineHeight='32px'>Estoy capacitado en el desarrollo de sitios web desde 0, manejando tecnologias de front-end y back-end que se complementan con el manejo de ciertas herramientas de diseño grafico para poder ofrecer un servicio lo mas completo</Text>
        </Text>
        {/* <!-- BOTONES --> */}
        <Button id="redButton" m='0px 10px'>Descargar CV</Button>
        <Link href='#contactid'><Button id="redButton" m='0px 10px'>Contrátame</Button></Link>
        {/* <!-- ICONOS --> */}
        <Flex className="icons">
            <Link as='a' href="https://www.facebook.com" target="_blank"><i className="bi bi-facebook"></i></Link>
            <Link as='a' href="https://www.instagram.com" target="_blank"><i className="bi bi-instagram"></i></Link>
            <Link as='a' href="https://www.x.com" target="_blank"><i className="bi bi-twitter"></i></Link>
            <Link as='a' href="https://www.linkedin.com/in/santino-escoriaza-6833b8311/" target="_blank"><i className="bi bi-linkedin"></i></Link>
            <Link as='a' href="https://github.com/SantinoEscoriaza/" target="_blank"><i class="bi bi-github"></i></Link>
        </Flex>
    </Flex>
    )
}

export default About