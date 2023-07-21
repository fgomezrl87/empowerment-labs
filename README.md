# NestJS Empowerment Labs

Este es un proyecto construido con NestJS y desplegado en AWS Lambda usando Serverless Framework y una base de datos hecha en DynamoDB.

## Pre-requisitos

- Node.js versión 18.x o superior
- NPM versión 7.x o superior
- Cuenta AWS con los permisos IAM necesarios
- AWS CLI instalado y configurado
- Serverless Framework instalado globalmente

## Clonar el repositorio

Para clonar este repositorio, abre una terminal y ejecuta el siguiente comando:

```
git clone https://github.com/fgomezrl87/empowerment-labs.git
```

## Instalación

Navega dentro del directorio del proyecto clonado y ejecuta:

```
npm install
```

## Configuración

Es necesario configurar el AWS_ACCESS_KEY_ID, el AWS_SECRET_ACCESS_KEY_ID y la región de tu AWS.

## Prueba Local

Para probar el proyecto localmente, se debe ejecutar el siguiente comando:

```
serverless offline
```

## Despliegue a AWS

Para desplegar en AWS, más específicamente en Lambda y creando un API Gateway, se debe ejecutar:

```
serverless offline
```