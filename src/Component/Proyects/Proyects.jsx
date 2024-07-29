import { Button, Flex, Link, Text, Wrap } from "@chakra-ui/react"
import ReusableProyect from "./reusableProyect.jsx"

const Proyects = () => {


    return(
        // CONTENEDOR PRINCIPAL //
        <Wrap id="portfolioid" h='100%'
        p={{base:'50px 30px', mid:'80px 30px', lg:'100px 100px 30px'}}
        justify='space-between'>

            {/* CONTENEDOR TEXTOS Y BOTON SUPERIOR */}
            <Flex as='section'
            w='100%' h='100%'
            pb='60px'
            justify='space-around'
            align='center'
            wrap={{base:'wrap', lg:'nowrap'}}>
                <Text as='h2' 
                w={{base:'100%', md:'48%', lg:'40%'}} 
                m={{base:'0px 0px 16px', lg:'0'}}
                textAlign='left'
                lineHeight={{base:'48px',mid:'64px', lg:'default'}}>
                    Échale un vistazo a mis proyectos
                </Text>
                <Text className="defaultText" 
                w={{base:'100%',md:'50%', lg:'32%'}} 
                m={{base:'0px 10px 20px 0px', lg:'0px 50px 0px 20px'}} 
                textAlign='justify'>
                    Estos son algunos ejemplos de proyectos que he desarrollado. Revisandolos podrás entender mejor la forma en la que trabajo el código y los resultados alcanzados
                </Text>
                <Link href="https://github.com/SantinoEscoriaza" target="_blank">
                    <Button id='redButton' p='16px 20px'>Ver más</Button>
                </Link>
            </Flex>

            {/* // PROYECTO 1 // */}
            <ReusableProyect
            name='Landing Page Nº1' 
            desc='Proyecto basado en recrear un diseño de referencia usando Html5 y Css3'
            image='img/imgProyect1.png'
            url='https://santinoescoriaza.github.io/image-based-web-project/'/>
            
            {/* // PROYECTO 2 // */}
            <ReusableProyect 
            name='Landing Page Nº2'
            desc='Proyecto basado en recrear un diseño de referencia usando Html5 y Css3'
            image='img/imgProyect2.png'
            url='https://santinoescoriaza.github.io/image-based-web-project2/'/>
        </Wrap>
    )
}

export default Proyects