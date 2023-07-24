# NestJS Empowerment Labs

Este es un proyecto construido con NestJS y desplegado en AWS Lambda usando Serverless Framework y una base de datos hecha en DynamoDB.

## Pre-requisitos

- Node.js versión 18.x o superior
- NPM versión 7.x o superior
- Cuenta AWS con los permisos IAM necesarios
- AWS CLI instalado y configurado
- Serverless Framework instalado globalmente

## Clonar el repositorio

Para clonar este repositorio, se debe abrir una terminal y ejecuta el siguiente comando:

```
git clone https://github.com/fgomezrl87/empowerment-labs.git
```

## Instalación

Navegar dentro del directorio del proyecto clonado y ejecutar:

```
npm install
```

## Configuración

Es necesario configurar el AWS_ACCESS_KEY_ID, el AWS_SECRET_ACCESS_KEY_ID, la región del AWS, el secret para JWT y las credenciales de la página TMDB

## Prueba Local

Para probar el proyecto localmente, se debe ejecutar los siguientes comandos:

```
npm run build
```

```
serverless offline
```

## Despliegue a AWS

Para desplegar en AWS, más específicamente en Lambda y creando un API Gateway, se debe ejecutar:

```
serverless deploy
```

## Rutas

La URL en el ambiente de pruebas:

```
http://localhost:3000
```

La URL en el ambiente de AWS Lambda:

```
https://jayyt5mk49.execute-api.us-east-2.amazonaws.com
```

## Proceso del Login para usar el endpoint

Deben enviar por el método POST la variable userId a la ruta `/dev/auth/login`. Obtendrán un token que debe ser enviado en la cabecera como Bearer para usar el resto de endpoints. La validez del token es de una hora.