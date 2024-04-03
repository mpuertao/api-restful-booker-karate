# Automatización de Pruebas de API 

(Reto Tecnico Enerbit - QA)


<p align='center'>
   Este proyecto utiliza KarateJS para automatizar las pruebas de una **API**.
</p>



<p align='center'>
 <a href="https://github.com/mpuertao/api-restful-booker-karate/actions">
    <img src="https://github.com/mpuertao/api-restful-booker-karate/actions/workflows/karate.yml/badge.svg" />
  </a>
</p>

<br>

____

## Requisitos

- Java Development Kit (JDK) > 11
- Gradlew o gradle instalado en tu sistema.
- Conexión a internet para descargar las dependencias de MavenRepository.

    ____
## Instalación

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/tu-usuario/tu-proyecto.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd tu-proyecto
    ```

3. Compila el proyecto usando Maven:

    ```bash
    gradlew clean install
    ```

    _____
## Uso

1. Ejecuta las pruebas de Karate:

    ```bash
    gradlew clean test
    ```

    ____
## Componentes a probar

1. Esta automatización contiene las pruebas para una API llamada restful-booker en el endpoint: [https://restful-booker.herokuapp.com/](https://restful-booker.herokuapp.com/)

   - Se realizaron pruebas tipo CRUD tanto peticiones a metodos GET, POST, PUT. No ejecutamos DELETE porque la API no ofrece dicha operación.

   - Nota: Agregamos autenticación para los consumos.

   - Como resultado obtenemos reporte de pruebas tanto en formato karate como en formato cucumber. El resultado queda en la carpeta autogenerada 'build' en el archivo cucumber-report.


    ___
## Estructura del Proyecto
<br>

```
.
├── README.md
├── build
├── build.gradle
├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew
├── gradlew.bat
├── settings.gradle
├── src
│   └── test
│       ├── java
│       │   ├── karate
│       │   │   ├── ManagementTest.java
│       │   │   ├── auth
│       │   │   │   ├── TokenRunner.java
│       │   │   │   └── createToken.feature
│       │   │   ├── createBooking
│       │   │   │   ├── CreateRunner.java
│       │   │   │   └── createBooking.feature
│       │   │   ├── data
│       │   │   │   ├── credentials.json
│       │   │   │   ├── listCreateBooking.json
│       │   │   │   └── putBooking.json
│       │   │   ├── getBooking
│       │   │   │   ├── GetRunner.java
│       │   │   │   └── getBooking.feature
│       │   │   └── putBooking
│       │   │       ├── PutRunner.java
│       │   │       └── putBooking.feature
│       │   ├── karate-config.js
│       │   └── logback-test.xml
│       └── resources
└── target
└── karate.log
```



___
## Contribuir

Si quieres contribuir a este proyecto, por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Haz tus cambios y confirma (`git commit -am 'Agrega nueva característica'`).
4. Sube tu rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.


