# Integrantes

| Nombre               | Correo                     |
|----------------------|----------------------------|
| Julian Acosta        | j.acostaj@uniandes.edu.co  |
| Juan Felipe Tamayo   | j.tamayoo@uniandes.edu.co  |
| Andres De la Hoz     | a.delahozg@uniandes.edu.co |
| Julio Pupo           | jc.pupo@uniandes.edu.co    |

# Pruebas E2E con Cypress sobre Ghost App

Este repositorio contiene diferentes pruebas E2E realizadas a la apliación Ghost usando Cypress, el cual es un framework de testing moderno y todo en uno. Es rápido, fácil de usar y permite ejecutar pruebas sobre cualquier aplicación web. En poco más de 2 años desde su lanzamiento de la versión 1.0.0 se ha convertido en una de las herramientas más populares de testing. Funciona en forma de caja negra, lo que significa que no es necesario tener acceso al código fuente de la aplicación, sino que se puede ejecutar con la URL de la página web. A continuación, podrá encontrar las diferentes funcionalidades probadas, los escenarios evaluados y todo lo necesario para poder ejecutar en su ambiente de trabajo las pruebas.

## Funcionalidades Bajo Prueba Versión 4.42 

**1. Iniciar sesión como administrador:** Funcionalidad para que un usuario del staff pueda iniciar sesión.\
**2. Crear nuevo post:** Funcionalidad para que el administrador del contenido del sitio web pueda agregar nuevos posts.\
**3. Crear página:** Funcionalidad para que el administrador del contenido del sitio web pueda crear una página.\
**4. Crear nuevo miembro manualmente:** Funcionalidad para que el administrador del sitio web pueda crear un miembro de manera manual.\
**5. Editar post:** Funcionalidad para que un administrador del contenido del sitio web pueda editar los posts ya creados.\
**6. Recuperar contraseña:** Funcionalidad para que un usuario pueda recuperar su contraseña en caso de haberla olvidado.\
**7. Invitar usuario al staff:** Funcionalidad para que un administrador pueda invitar y asignar roles de Contribuidor, Autor, Editor o Administrador.

## Escenarios de Prueba Versión 4.42
**1. Iniciar sesión como administrador-** con usuario registrado: Como admninistrador de Ghost iniciar sesión con datos correctos y ya registrados para acceder al Dashboard de la app.\
**2. Iniciar sesión como administrador -** con usuario NO registrado: Como admninistrador de Ghost iniciar sesión con datos correctos pero NO registrados para poder acceder al Dashboard de la app.\
**3. Iniciar sesión como administrador -** con credenciales invalidas: Como admninistrador de Ghost iniciar sesión con datos no validos para ver la correcta validación de los datos y el acceso a la plataforma.\
**4. Crear nuevo post -** con preview:  Como admninistrador de Ghost iniciar sesión con datos correctos, y crear un nuevo post público que pueda ser consultado luego.\
**5. Crear nuevo post -** con vídeo y de acceso solo para miembros: Como admninistrador de Ghost iniciar sesión con datos correctos, y crear un nuevo post con un video y de acceso solo para miembros que pueda ser consultado luego.\
**6. Crear nueva página:** Como admninistrador de Ghost iniciar sesión con datos correctos, y crear una nueva página donde puedan ser añadidos nuevos posts.\
**7. Crear nuevo miembro manuamente -** por primera vez: Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un miembro por primera vez y visualizar que se actualiza el número de miembros.\
**8. Crear nuevo miembro manualmente -** con correo ya registrado: Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un miembro ya registrado y comprobar que se valida la existencia del correo ya registrado para no repetir la información.\
**9. Crear nuevo miembro manualmente -** con datos invalidos: Como admninistrador de Ghost ingresar datos de inicio de sesión invalidos para comprovar la correcta validación de los campos antes de poder acceder al Dashboard del sitio. \
**10. Editar post -** con nuevo contenido de acceso para todos: Como admninistrador de Ghost iniciar sesión con datos correctos, y editar la información de un post público para luego validar la actualización de la información en el sitio web.\
**11. Editar post -** con acceso solo a miembros: Como admninistrador de Ghost iniciar sesión con datos correctos, y editar el acceso de un post para sólo miembros del sitio y luego validar que es visible en el sitio web.\
**12. Recuperar constraseña -** con usuario registrado: Como usuario de Ghost acceder al sitio, ingresar correo registrado y seleccionar la opción de recuperar contraseña para luego esperar recibir un correo que brinde nuevo acceso.\
**13. Recuperar contraseña -** con usuario NO registrado: Como usuario de Ghost acceder al sitio, ingresar correo no registrado para validar la correcta verificación del correo no registrado en plataforma.\
**14. Recuperar contraseña -** validar que se aplique el número (5) de intentos límites: Como usuario de Ghost acceder al sitio, ingresar correo registrado y seleccionar la opción de recuperar contraseña por 5 veces seguidas para verificar que se cumple el límite de intentos sobre un mismo usuario.\
**15. Recuperar contraseña -** con datos invalidos: Como usuario de Ghost acceder al sitio, ingresar datos invalidos en los campos para validar la correcta verificación y retroalimentación del sitio.\
**16. Invitar usuario al staff -** invitar como Contribuidor: Como admninistrador de Ghost iniciar sesión con datos correctos, para invitar una nueva persona al staff del sitio y visualizar que se agrega efectivamente como Contribuidor.\
**17. Invitar usuario al staff -** invitar como Autor: Como admninistrador de Ghost iniciar sesión con datos correctos, para invitar una nueva persona al staff del sitio y visualizar que se agrega efectivamente como Autor.\
**18. Invitar usuario al staff -** invitar como Editor: Como admninistrador de Ghost iniciar sesión con datos correctos, para invitar una nueva persona al staff del sitio y visualizar que se agrega efectivamente como Editor.\
**19. Invitar usuario al staff -** invitar como Administrador: Como admninistrador de Ghost iniciar sesión con datos correctos, para invitar una nueva persona al staff del sitio y visualizar que se agrega efectivamente como Administrador.\
**20. Invitar usuario al staff -** invitar con datos invalido: Como admninistrador de Ghost iniciar sesión con datos correctos, para ingresar datos invalidos en el campo del correo y verificar la correcta verificación y retroalimentación del sitio.

## Funcionalidades Bajo Prueba Versión 3.42

**1. Iniciar sesión como administrador:** Funcionalidad para que un usuario del staff pueda iniciar sesión.\
**2. Crear nuevo post:** Funcionalidad para que el administrador del contenido del sitio web pueda agregar nuevos posts.\
**3. Crear página:** Funcionalidad para que el administrador del contenido del sitio web pueda crear una página.\
**4. Invitar usuario al staff:** Funcionalidad para que un administrador pueda invitar y asignar roles de Contribuidor, Autor, Editor o Administrador.\
**5. Editar post:** Funcionalidad para que un administrador del contenido del sitio web pueda editar los posts ya creados.\

## Escenarios de Prueba Versión 3.42

**1. Iniciar sesión como administrador-** con usuario registrado: Como admninistrador de Ghost iniciar sesión con datos correctos y ya registrados para acceder al Dashboard de la app.\
**2. Crear nuevo post -** con preview:  Como admninistrador de Ghost iniciar sesión con datos correctos, y crear un nuevo post público que pueda ser consultado luego.\
**3. Crear nueva página:** Como admninistrador de Ghost iniciar sesión con datos correctos, y crear una nueva página donde puedan ser añadidos nuevos posts.\
**4. Invitar usuario al staff -** invitar como Contribuidor: Como admninistrador de Ghost iniciar sesión con datos correctos, para invitar una nueva persona al staff del sitio y visualizar que se agrega efectivamente como Contribuidor.\
**5. Editar post -** con nuevo contenido de acceso para todos: Como admninistrador de Ghost iniciar sesión con datos correctos, y editar la información de un post público para luego validar la actualización de la información en el sitio web.\

<hr>

# Configuración de Ghost

<img src="https://user-images.githubusercontent.com/65487235/157884383-1b75feb1-45d8-4430-b636-3f7e06577347.png" alt="Ghost" width="200px">

## Inicio rápido 

Si desea ejecutar su propia instancia de Ghost, en la mayoría de los casos, la mejor manera es utilizar nuestro **CLI tool**

```
npm install ghost-cli -g
```
&nbsp;
Luego, si instala localmente, agregue el indicador `local` para comenzar a funcionar en menos de un minuto - [Local install docs](https://ghost.org/docs/install/local/)
```
ghost install local
```
o en un servidor ejecute la instalación completa, incluida la configuración automática de SSL usando LetsEncrypt - [Production install docs](https://ghost.org/docs/install/ubuntu/)

```
ghost install
```

Adicionalmente, para instalar una versión local especifica se seguirá el siguiente comando (en nuestro caso la versión utilizada es la 4.42.0).

```
ghost install 4.42.0 --local
```


¡Eso es todo! Estás listo.

## Iniciar y detener 
Ghost se ejecuta en un proceso en segundo plano separado y permanece ejecutándose hasta que lo detenga o reinicie su computadora. Así que puede encontrar estos comandos útiles para manejarlo:
```
• ghost stop para detener Ghost
• ghost start para iniciar Ghost
• ghost log ver registros (logs).
• ghost ls para enumerar todos los blogs de Ghost en ejecución.
```

Ejecute la ayuda de Ghost para obtener una lista de los comandos disponibles o explore la [documentación completa de Ghost-CLI](https://ghost.org/docs/ghost-cli/).


#### Adicionalmente, para ejecutar dos versiones de Ghost tenga en cuenta las siguientes instrucciones:

Primero, deberá instalar Docker en su computadora.

*[Instalar Docker Desktop en Linux](https://docs.docker.com/desktop/linux/install/)*\
*[Instalar Docker Desktop en Mac](https://docs.docker.com/desktop/mac/install/)*\
*[Instalar Docker Desktop en Windows](https://docs.docker.com/desktop/windows/install/)*


Luego, deberá instalar en Docker una version diferente a la ya instalada en su máquina personal.

Para de una versión de Ghost mayor a la 4.0.0, deberá instalar la versión 3.42. Esto se puede realizar mediante los comandos de docker:

```
docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42
```

*Esto desplegará en la siguiente dirección la versión de Ghost Admin:* Ghost 3.42\
http://localhost:3001/ghost

Si se encuentra haciendo uso de una versión de ghost menor a la 4.0.0, deberá instalar la versión 4.44. Esto se puede realizar mediante los comandos de docker:

```
docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0
```

*Esto desplegará en la siguiente dirección la versión de Ghost Admin:* Ghost 4.44.\
http://localhost:3002/ghost

<!-- End GHOST documentation  -->

# Configuración de Cypress.io

<img src="https://user-images.githubusercontent.com/66291589/167258023-93bd8c47-784e-46f4-82d8-399128c3f0c4.png" alt="Ghost" width="200px">

Ejecute eventos al azar con la ayuda de la herramienta para pruebas automatizadas Cypress.

## Help + Testing
Los pasos a continuación lo llevarán a través de Cypress.

**Si te quedas atascado, aquí hay más ayuda:**

* [Cypress Support](https://on.cypress.io/support)

### 1. Instalar Cypress

Siga estas instrucciones para [instalar Cypress](https://on.cypress.io/installing-cypress) de acuerdo a su SO.

En caso de usar npm ejecute el siguiente comando.

```
npm install cypress --save-dev
```


### 2. Dirigirse desde su CLI hacia la carpeta del proyecto 'ABP_Ghost'

Ejecute los comandos con Git Bash para completar las siguientes tareas:
- Para imprimir el directorio de trabajo actual (pwd)
- Para navegar entre directorios en su computadora (cd)

### 3. Abrir en su Editor de Codigo el proyecto y agregar sus credenciales de Ghost
1. En tu editor de codigo dirigete hasta el archivo ABP_Ghost.spec.js.\
![image](https://user-images.githubusercontent.com/66291589/167267627-923fe215-a3c9-40f2-b3e5-d83cf50f77ed.png)

2. En este archivo buscar las variables userAdmin y passwordAdmin y modifique los datos ingresados por tus credenciales de Ghost.\
![image](https://user-images.githubusercontent.com/66291589/168491501-6ccba085-49a3-472a-871f-5f5b94ed52d4.png)

En la variable *userAdmin* debera cambiarlo por su correo administrador de Ghost.\
En el metodo *passwordAdmin* debera cambiarlo por su contrasena administrador de Ghost.


### 4. Correr Cypress 
Ahora estamos listos para ejecutar las pruebas de Cypress.

Estando sobre el directorio 'Ghost_ABP_Cypress', escriba en su terminal escriba el siguiente comando:
```bash
cypress open
```

Luego, en la ventana de Cypress seleccione el proyecto 'ABP_Ghost.spec.js' y 'ABP_Ghost_3_42.spec.js. \
![image](https://user-images.githubusercontent.com/66291589/168494066-20d40226-237e-4299-b3f1-5098bcc869e3.png)


Finalmente verá a Cypress en funcionamiento visitando la pagina http://localhost:2368/ y realizando pruebas automatizadas de eventos random. 

## Instrucciones de Ejecución de Pruebas con Cypress en la Versión 3.42 de Ghost


**Nota:** En la ubicación cypress/integration/ABP_Ghost_4_42.spec.js encontrará dos archivos para ejecutar las pruebas tanto en la version 4_42 y la version anterior 3.42, estas apareceran al ejecutar el comando cypress open. 



## Generación de Reportes de Pruebas de Regresión Visual entre la Versiones 3.42 y 4.42 de Ghost con Resamble.js

Para la ejecucion de pruebas con Resemble deberá tomar los escenarios a probar desde la ubicacion /Ghost_ABP_Cypress/cypress/screenshots en esta encontrara dos carpetas, una para la version 3.42 y otra para la version 4.42, ambas contienne los escenarios.
Para ejecutar las pruebas debera tomar las imagenes de los mismos escenarios para ambas versiones, luego llevarla a la ubicacion Screenshots_Ghost y ubicarlas en carpetas por funcionalidades a probar y eliminar el escenario que estaba previamente en esa carpeta para probar el nuevo escenario pegado. 

```
1. Desde la linea de comando, ingresar a la ruta Ghost_ABP_Kraken/features/Screenshot/Resamble_VRT
2. Corra el comando npm install para instalar lo módulos necesarios para el proyecto de Resamble.js
3. Abra en visual studio code el archivo index.js, allí encontrará una variable llamada "scenario" que se debe modificar con el nombre del scenario a generar el respectivo reporte de diferencias visuales entre la versiones evaluadas de Ghost para uno de los cinco scenarios seleccionados para VRT.
4. Corra el comando node index.js y se generará el reporte html de diferencias visuales para el escenario específico en la ruta Ghost_ABP_Kraken/features/Screenshot/{nombre del scenario seleccionado en la anterior paso}.
```
**Nota:** Los reportes (report.html) para los cinco scenarios seleccionados los prodrá encontrar en las siguientes rutas:

* Escenario 1: Screenshots_Ghost/Func1/report.html
* Escenario 4: Screenshots_Ghost/Func4/report.html
* Escenario 6: Screenshots_Ghost/Func6/report.html
* Escenario 10: Screenshots_Ghost/Func10/report.html
* Escenario 16: Screenshots_Ghost/Func16/report.html

## Instrucciones de Ejecución de Pruebas para Ejecutar Estrategias de Generacion de Datos
* En la ruta cypress/integration encontrara 4 archivos nuevos donde debera cambiar las variables *userAdmin* y *userPassword* por sus variables de administrador en Ghost para luego asi ejecutar los 4 archivos de pruebas, donde cada uno contiene 30 escenarios de pruebas realizados con las tres estrategias solicitadas: pool de datos a-priori, pool de datos (pseudo) aleatorio dinámico y escenario aleatorio.
* Los archivos a ejecutar son: 

| Archivo |
|---------|
|ABP_Ghost_EditarPerfil.spec.js | 
| ABP_Ghost_Login_Recuperar_Password_Crear_Editar_Tag.spec.js|
|ABP_Ghost_Post_Navegation.spec.js |
|ABP_Ghost_Crear_Pagina_Crear_Miembro.spec.js |

**Nota:** Para la implementacion de estas pruebas se utiliza la libreria FakerJS por lo que antes de ejecutar los 4 archivos de pruebas debe instalar la dependencia de la siguiente manera desde el directorio raíz del repositorio: 
```
npm install @faker-js/faker --save-dev
```
