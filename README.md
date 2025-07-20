# "Coplas Eternas" - Disquería de música folcklorica

"Coplas Eternas" es una plataforma pensada para los amantes del folcklore, donde la tradición y la identidad cultural encuentran su lugar en cada disco. Nuestra web ofrece un catálogo cuidadosamente curado de música folcklórica argentina y latinoamericana, con artistas consagrados y nuevas voces que mantienen viva la raíz del pueblo. Cada álbum disponible en "Coplas Eternas" no solo representa un estilo musical, sino también una historia, una región y una forma de sentir el mundo desde lo profundo de nuestras costumbres.

Con un diseño simple e intuitivo, "Coplas Eternas" permite descubrir y adquirir discos de manera ágil, fomentando el acceso a la cultura y al arte popular. Además, brindamos recomendaciones y novedades para que cada visita se transforme en un viaje sonoro por los paisajes del folcklore. Ya sea que busques revivir clásicos o encontrar nuevas joyas musicales, esta página es el lugar ideal para quienes llevan el folcklore en el alma.

## Datos de estudiante

*   **Apellido y nombre:** Barragán, María del Alba
*   **DNI:** 33917854
*   **E-mail:** albabarragan88@gmail.com
*   **Sede:** Rauch


## Descripción del proyecto

Esta aplicación web permite tener una simulación completa de la compra de los discos que posee la disquería, contando con su artista, nombre del disco, stock, cantidad, imagen de portada y precio. Dentro de la cantidad, se observa botones que permiten determinar cuantos discos se desea comprar, como así también un botón para agregar al carrito la cantidad deseada.

Dentro de la misma página, existe también un carrito de compras donde se agregan los discos elegidos y, de manera dinámica, se observa el cambio de cantidad y precio final a pagar.
En este mismo carrito, podemos eliminar de a un disco por vez mediante un botón. Y finalmente, cuando la compra está decidida; un botón de compra nos dará el mensaje simulando dicha compra y vaciando el carrito para poder continuar. 

Por otro lado, existen otras páginas dentro de la misma aplicación: 
- Información para contacto, donde aparecen datos de interés para el cliente cuando desee contactar a la disquería por diferentes motivos.
- Inicio de Sesión, que cuando es validado, permite ingresar a un formulario para agregar un nuevo disco. De esta manera, solo usuarios registrados pueden agregar nuevos elementos.

    ### Datos para el inicio de sesión

    > **Usuario:** Alba  
    > **Contraseña:** 12345

## Componentes del sitio

+ Carrito: Encargado de la lógica de la compra
+ Disqueria-about: Contiene la información de contacto
+ Disquería-music: Contiene los componentes de music-list y carrito-list
+ Input-integer: Maneja la manipulación de la entrada del usuario en las cantidades de la lista de discos
+ Music-list: Se encarga de todo lo relacionado con la lógica de la lista de discos disponibles
+ Sign-up: Permite al usuario iniciar sesión
+ Agregar-disco: Permite agregar nuevos discos a la página

## Conceptos vistos y trabajados en el proyecto

- Ruteo
- Directivas
- Componentes
- Templates
- DataBinding
- Interfaces
- Pipes
- HTTPClient
- Consumo de datos mediante Mockapi
