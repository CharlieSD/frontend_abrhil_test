# frontend_abrhil_test
Repositorio Aplicación para el control de contractos

Aplicación Web creada en React.js con acciones de Redux para realizar peticiones al backend de contactos

## Peticiones

- **Lista de contactos**: realiza una petición para obtener la lista de los contectos.
    - Devuelve la lista de información de los contactos, ordenadas en Card.
    - En cada Card exite un botón para eliminar y otro para editar al contacto.
- **Crear contacto**: formulario con los datos válidos para crear un nuevo contacto.

Cada dato de un contacto, contiene validaciones.

## Docker

Se cuenta con 2 servicios: **frontend** y **nginx**. Al ejecutar le programa se habilita una red virtual interna de Docker que ejecuta cada uno de los servicios:
- **Frontend** Contenedor diseñado para construir la aplicación React + Redux, este contenedor se destruye al finalizar la construcción del proyecto, dejando dispoinble los archivos de construcción disponible e un volumen compartido con el contendor Nginx.
- **Nginx** Contenedor como servicio web que abastece la vista en frontend gracias a un volumen compartido con el contenedor de construcción.

## Goals

1. Se crea repositorio de frontend, contiene aplicación en React y Nginx.
2. Se crea aplicación en React.js + Redux.
3. Se crea Views para listar contactos.
4. Se crea acción para eliminar un contacto por uuid.
5. Se crean validaciones de datos.

## No terminado
1. Autenticar al usuario de lado del front.
2. Buscador de contactos.

