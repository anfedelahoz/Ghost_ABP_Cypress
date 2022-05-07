

<hr>
<img src="https://user-images.githubusercontent.com/65487235/157884383-1b75feb1-45d8-4430-b636-3f7e06577347.png" alt="Ghost" width="200px">

# Configuración de Ghost

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
<img src="https://user-images.githubusercontent.com/66291589/167258023-93bd8c47-784e-46f4-82d8-399128c3f0c4.png" alt="Ghost" width="200px">

# Configuración de Cypress.io
Ejecute eventos al azar con la ayuda de la herramienta para pruebas automatizadas Cypress.

## Help + Testing
Los pasos a continuación lo llevarán a través de Cypress.

**Si te quedas atascado, aquí hay más ayuda:**

* [Cypress Support](https://on.cypress.io/support)

### 1. Instalar Cypress

Siga estas instrucciones para [instalar Cypress](https://on.cypress.io/installing-cypress)de acuerdo a su SO.


### 2. Dirigirse desde su CLI hacia la carpeta del proyecto 'Cypress_Bono'

Ejecute los comandos con Git Bash para completar las siguientes tareas:
- Para imprimir el directorio de trabajo actual (pwd)
- Para navegar entre directorios en su computadora (cd)

### 3. Correr Cypress 
Ahora estamos listos para ejecutar las pruebas de Cypress.

En su terminal escriba el siguiente comando:
```bash
cypress open
```

Luego, en la ventana de Cypress seleccione el proyecto 'monkey_testing.spec.js'. 

Finalmente verá a Cypress en funcionamiento visitando la pagina losestudiantes.co y realizando pruebas automatizadas de eventos random. 




