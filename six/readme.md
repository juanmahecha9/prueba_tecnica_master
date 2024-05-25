# Directrices de Nomenclatura para el Equipo de Desarrollo

En la empresa, reconocemos la importancia de mantener una nomenclatura coherente para asegurar la legibilidad, facilitar el mantenimiento y fomentar una colaboración efectiva en nuestros proyectos de desarrollo de software. Por tanto, establecemos las siguientes directrices de nomenclatura para diversas áreas clave:

## Bases de Datos:

1. Nombres de Bases de Datos: Las bases de datos deben tener nombres descriptivos que reflejen su propósito o dominio de aplicación. Se sugiere utilizar minúsculas y separar palabras con guiones bajos o mayúsculas.

Ejemplos: ecommerce_database, inventory_system_db

2. Nombres de Tablas: Las tablas deben nombrarse en singular y representar entidades individuales, evitando abreviaturas poco claras.

Ejemplos: usuario o tbl_producto

3. Nombres de Columnas: Las columnas deben tener nombres descriptivos, utilizando el estilo snake_case o camelCase. Evita nombres genéricos como data o info.

Ejemplos: fecha_creacion, precio_venta, nombre_cliente

## Variables y Funciones:

1. Variables: Utiliza nombres significativos y descriptivos para las variables, aplicando camelCase para las locales y snake_case para las globales. Evita abreviaturas y nombres ambiguos.

Ejemplos: nombreUsuario, precioProducto, cantidad_pedidos

2. Funciones y Métodos: Utiliza verbos que describan la acción realizada por la función. Usa camelCase para nombrar funciones y métodos.

Ejemplos: calcularPrecioTotal, actualizarInventario, obtenerListaPedidos

## Clases:

1. Nombres de Clases: Utiliza el formato PascalCase para nombrar las clases. Los nombres deben representar sustantivos que describan la entidad u objeto que modelan.

Ejemplos: Usuario, Producto, Pedido

## Git:

1. Nombres de Ramas: Utiliza nombres descriptivos y significativos para las ramas, separando palabras con guiones.

Ejemplos: feature/nueva_funcionalidad, fix/error_validacion

2. Commits: Escribe mensajes de commit claros y concisos que describan los cambios realizados, utilizando el tiempo presente imperativo.

Ejemplos: "Agregar función de autenticación", "Corregir error de validación en formulario"

3. Pull Requests: Utiliza nombres descriptivos para los pull requests e incluye una descripción detallada de los cambios realizados y el contexto relevante.

Ejemplos: "Añadir validación de formulario de registro", "Refactorizar la lógica de autenticación"

## Documentación:

1. Comentarios en el Código: Utiliza comentarios claros y concisos para explicar el propósito de las funciones, variables o secciones de código.

2. Documentación del Proyecto: Proporciona una documentación detallada del proyecto, incluyendo una descripción general, instrucciones de instalación, descripciones de los componentes principales y ejemplos de uso.

## Observaciones Finales:

1. Consistencia: Mantén la consistencia en toda la base de código siguiendo estas directrices de nomenclatura y los estándares existentes en el proyecto.

2. Revisión de Código: Realiza revisiones de código periódicas para garantizar el cumplimiento de las políticas de nomenclatura y mantener la calidad del código.

3. Flexibilidad: Adapta estas directrices según las necesidades específicas del proyecto o equipo, manteniendo siempre la coherencia en todo el proyecto.

Estas directrices de nomenclatura son fundamentales para asegurar la calidad del código, facilitar la colaboración entre los miembros del equipo y garantizar la legibilidad y mantenibilidad a largo plazo de nuestros proyectos de desarrollo de software.
