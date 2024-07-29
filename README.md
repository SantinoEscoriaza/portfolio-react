# Proyecto Portfolio Personal en React

[Deploy por Vercel](https://portfolio-react-eta-gray.vercel.app/)
El proyecto consiste en migrar el codigo del [mismo portfolio personal](https://github.com/SantinoEscoriaza/mi-portfolio) realizado anteriormente a un proyecto de React + Vite. El diseño del portfolio está basado en siguiente [diseño de Behance](https://www.behance.net/gallery/199548441/Portfolio-Web-Design)

## Novedades

1) Se realizaron correcciones respecto a la version anterior del proyecto
2) Gracias a que se migró a React, el código está mucho más resumido y estructurado, haciendo uso de componentes padre / hijos con propiedades, lo que permite distribuir y seccionar mejor el código
3) Se implementó Chakra-UI para la estructura y el uso de estilos, lo que permite colocar casi la totalidad del código en archivos .jsx y no usar .css

## Observaciones / problemas durante el desarrollo
### Superposición de estilos
- El uso de Chakra-UI aveces no resultó tan efectivo, en especial en los estilos para etiquetas `<Button>`, los cuales no funcionaban adecuadamente. Para solucionar esto, coloqué los estilos de los botones en un id. Sin embargo, no considero que esta sea una buena práctica debido a que como estos estilos son reutilizables, hay más de un boton con el mismo id.

### Uso de carruseles descartado
- Respecto de la versión anterior del portfolio, en esta versión se descartó el uso de carruseles en las secciones de Habilidades y Testimonios. Esto debido a que no es lo ideal a la hora de dar una primera impresión para un Recruiter. Es preferible que en nuestro portfolio se vea a simple vista que manejamos muchas tecnologías o tenemos muchos testimonios / reconocimientos que avalan nuestra experiencia

### Seccion de testimonios
- La seccion de testimonios sufrió un cambio total respecto a la original, enfocandose en lo mencionado en el punto anterior acerca de la primer impresión que damos en nuestro portfolio. Tambien se aclara que el contenido de esta sección es generico y está colocado para representar como se ve la sección.

<hr>

Recomiendo ampliamente visitar el [proyecto original](https://github.com/SantinoEscoriaza/mi-portfolio), particularmente leer el Read Me adjunto y revisar el proyecto para corroborar cualquier cambio realizado.