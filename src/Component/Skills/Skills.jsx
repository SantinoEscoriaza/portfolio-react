
import { Flex } from '@chakra-ui/react'
import ReusableSkill from './reusableSkill.jsx'

const Skills = () => {


    return(
        <Flex as='section' id="skillsid"
        p={'80px 100px'}
        wrap='wrap'
        justify='center'
        color='#ffffff'
        bgColor='#000000'>
            <h2>Habilidades</h2>
            {/* <!-- HTML SKILL --> */}
            <ReusableSkill 
                name='Html 5' 
                img='icons/html5.svg' 
                descripcion={'Desarrollo de código html ordenado y preciso, respetando las tendencias actuales del formato del código.'}/>

            {/* <!-- CSS SKILL --> */}
            <ReusableSkill 
                name='Css 3' 
                img='icons/css3.svg' 
                descripcion={'Amplio uso de herramientas de css para el estilo de los sitios web.'}/>

            {/* <!-- JS SKILL --> */}
            <ReusableSkill 
                name='JavaScript' 
                img='icons/js.svg' 
                descripcion={'Aplicación precisa de herramientas de Java Script para darle el funcionamiento más correcto a los sitios web.'}/>

            {/* <!-- JAVA SKILL --> */}
            <ReusableSkill 
                name='Java' 
                img='icons/java.svg' 
                descripcion={'Conocimientos basicos aplicables para el desarrollo de programas ejecutables basicos.'}/>

            {/* <!-- SQL SKILL --> */}
            <ReusableSkill 
                name='MySQL' 
                img='icons/mysql.svg' 
                descripcion={'Manejo de bases de datos relacionales propias del funcionamiento de todo sitio web con inputs / outputs del usuario'}/>

            {/* <!-- REACT SKILL --> */}
            <ReusableSkill 
                name='React' 
                img='icons/react.svg' 
                descripcion={'Desarrollo de proyectos en React + Vite, haciendo uso de JavaScript. Conocimientos en el uso de frameworks como Chakra-UI'}/>
        </Flex>
    )
}

export default Skills