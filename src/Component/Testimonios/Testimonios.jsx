import { Wrap, Text } from '@chakra-ui/react'
import ReusableTestimonio from './reusableTestimonio.jsx'

const Testimonios = () => {


    return(
        // TESTIMONIOS. Leer ReadMe //
        <Wrap as='section' id="testimoniosid"
            p={{base:'40px 50px 0px' ,lg:'50px 100 0px'}}
            justify='space-between'
            align='center'>

            <Text as='h2'>Testimonios</Text>
            
            <ReusableTestimonio
            name='Jack Pearson'
            image='img/jackPearson.jpg'
            testimonio='"Su incorporación al equipo de trabajo fue todo un cambio de perspectiva. Santino hizo que el equipo trabaje de manera más eficaz."'/>
            <ReusableTestimonio 
            name='Jack Pearson'
            image='img/jackPearson.jpg'
            testimonio='"Su incorporación al equipo de trabajo fue todo un cambio de perspectiva. Santino hizo que el equipo trabaje de manera más eficaz."'/>
            <ReusableTestimonio 
            name='Jack Pearson'
            image='img/jackPearson.jpg'
            testimonio='"Su incorporación al equipo de trabajo fue todo un cambio de perspectiva. Santino hizo que el equipo trabaje de manera más eficaz."'/>
            <ReusableTestimonio 
            name='Jack Pearson'
            image='img/jackPearson.jpg'
            testimonio='"Su incorporación al equipo de trabajo fue todo un cambio de perspectiva. Santino hizo que el equipo trabaje de manera más eficaz."'/>
        </Wrap>
    )
}

export default Testimonios