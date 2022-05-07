# Pruebas E2E con Cypress sobre Ghost App

### Funcionalidades: 
1. Iniciar sesión como administrador.
2. Crear post.
3. Crear página.
4. Crear nuevo miembro manualmente.
5. Editar post.
6. Recuperar contraseña.
7. Invitar usuario al staff.

### Escenarios:
1. Iniciar sesión como administrador: con usuario registrado.
2. Iniciar sesión como administrador: con usuario NO registrado.
3. Iniciar sesión como administrador: con credenciales invalidas.
4. Crear post: con preview.
5. Crear post: con vídeo y de acceso solo para miembros.
6. Crear página.
7. Crear nuevo miembro.
8. Crear nuevo miembro manualmente: con correo ya registrado.
9. Crear nuevo miebmro manualmente: con datos invalidos.
11. Editar post: con nuevo contenido de acceso para todos.
12. Recuperar constraseña: con usuario registrado-
13. Recuperar contraseña: con usuario no registrado.
14. Recuperar contraseña: validar que se aplique el número (5) de intentos límites.
15. Recuperar contraseña: con datos invalidos.
16. Invitar usuario al staff: invitar como Contribuidor.
17. Invitar usuario al staff: invitar como Autor.
18. Invitar usuario al staff: invitar como Editor.
19. Invitar usuario al staff: invitar como Administrador.
20. Invitar usuario al staff: invitar con datos invalidos.

### Pros y contras


| Pros | Contras |
| --- | --- |
| Son pruebas económicas porque no requieren tantas horas de humano y la mayor parte de la carga se asigna a máquinas de cómputo que pueden trabajar 24 / 7. | Al utilizar datos aleatorios es muy probable que la ejecución de las pruebas se quede detenida en una misma interfaz. |
| Muy útil para encontrar crashes y excepciones en aplicaciones. | Alta tasa de eventos inválidos. |
| Rápida ejecución, por lo que pueden ser útiles para realizar pruebas de desempeño por el volumen de eventos que pueden generar. | La replicabilidad de la secuencia de eventos generados se puede ver afectada si no se tiene un semilla o método que garantice que independientemente de la aleatoriedad se puede replicar una situación en contrada.  |
| Es suficiente con generar un script con el recorrido de la funcionalidad para que quede listo para la ejecución tantas veces que se requiera, permitiendo de manera ágil la entrada para una estrategia de pruebas de carga.| El trabajo manual del analista es requerido en gran parte del proceso de análisis final, como validación de datos, extracción de resultados y comparación de los mismos. |



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


<!-- End GHOST documentation  -->

<img src="https://user-images.githubusercontent.com/66291589/167258023-93bd8c47-784e-46f4-82d8-399128c3f0c4.png" alt="Ghost" width="200px">

# Configuración de Cypress.io

Ejecute eventos al azar con la ayuda de la herramienta para pruebas automatizadas Cypress.

## Help + Testing
Los pasos a continuación lo llevarán a través de Cypress.

**Si te quedas atascado, aquí hay más ayuda:**

* [Cypress Support](https://on.cypress.io/support)

### 1. Instalar Cypress

Siga estas instrucciones para [instalar Cypress](https://on.cypress.io/installing-cypress) de acuerdo a su SO.


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




