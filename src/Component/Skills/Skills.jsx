import './Skills.css'

const Skills = () => {


    return(
        <section class="skills" id="skillsid">
            <h2>Habilidades</h2>
            {/* <!-- // BOTONES DE SELECCION PARA CELULARES // --> */}
            <button class="botonSelectSkill"><i class="bi bi-arrow-left"></i></button>
            {/* <!-- HTML SKILL --> */}
            <section class="skillSec html">
                <div class="contSkillimg"><img src="icons/html5.svg" alt="htmlLogo"/></div>
                <h3 class="skill">Html 5</h3>
                <p class="skillDesc">Desarrollo de código html ordenado y preciso, respetando las tendencias actuales del formato del código.</p>
            </section>
            <button class="botonSelectSkill"><i class="bi bi-arrow-right"></i></button>
            {/* <!-- CSS SKILL --> */}
            <section class="skillSec css">
                <div class="contSkillimg"><img src="icons/css3.svg" alt="htmlLogo"/></div>
                <h3 class="skill">CSS 3</h3>
                <p class="skillDesc">Amplio uso de herramientas de css para el estilo de los sitios web.</p>
            </section>
            {/* <!-- JS SKILL --> */}
            <section class="skillSec js">
                <div class="contSkillimg"><img src="icons/js.svg" alt="htmlLogo"/></div>
                <h3 class="skill">Java Script</h3>
                <p class="skillDesc">Aplicación precisa de herramientas de Java Script para darle el funcionamiento más correcto a los sitios web.</p>
            </section>
            {/* <!-- JAVA SKILL --> */}
            <section class="skillSec java">
                <div class="contSkillimg"><img src="icons/java.svg" alt="htmlLogo"/></div>
                <h3 class="skill">Java</h3>
                <p class="skillDesc">Conocimientos basicos aplicables para el desarrollo de programas ejecutables basicos.</p>
            </section>
            {/* <!-- SQL SKILL --> */}
            <section class="skillSec sql">
                <div class="contSkillimg"><img src="icons/mysql.svg" alt="htmlLogo"/></div>
                <h3 class="skill">MySQL</h3>
                <p class="skillDesc">Manejo de bases de datos relacionales propias del funcionamiento de todo sitio web con inputs / outputs del usuario</p>
            </section>
            {/* <!-- // SELECTOR SKILL PARA CELULARES // --> */}
            <div class="selectorSkill">  
                <hr class="selectSkill selected"></hr>
                <hr class="selectSkill"></hr>
                <hr class="selectSkill"></hr>
                <hr class="selectSkill"></hr>
                <hr class="selectSkill"></hr>
            </div>
        </section>
    )
}

export default Skills