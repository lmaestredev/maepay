<h1 align="center">Backend Developer Challenge</h1>

<p align="center">
  A continuacion te explicaré como funciona el proyecto
</p>

## Table of Contents

- [Installing](#installing)
- [Building](#building)
- [Testing](#testing)
- [Linting](#linting)
- [Contributing](#contributing)

## Installing

```bash
nvm install 18.0.0
nvm use
npm install npm@8.3.0 -g
npm install
```

## Building

```bash
npm run build
```
## Running

```bash
npm run start
```

## Testing

### Jest with Testing Library

```bash
npm run test
```

## Linting

Run the linter

```bash
npm run lint
```

Fix lint issues automatically

```bash
npm run lint:fix
```
# flixxo-challenge

### ¿Qué es SQL Injection y cómo puede evitarse?

La inyección de SQL es un tipo de ataque informático en el que un atacante inserta código SQL malicioso en las consultas SQL que se ejecutan en una aplicación. Este tipo de ataque puede ocurrir cuando una aplicación web no valida o escapa correctamente los datos proporcionados por el usuario antes de incluirlos en una consulta SQL.

Un ataque de inyección de SQL puede tener consecuencias graves, como la revelación de información sensible, modificación o eliminación de datos, y en algunos casos, incluso el control total del sistema subyacente.

Para evitar la inyección de SQL, se deben seguir las mejores prácticas de seguridad:

1 Parámetros de consulta parametrizados o preparados: En lugar de concatenar valores directamente en las consultas SQL, utiliza parámetros de consulta parametrizados o preparados proporcionados por los frameworks o las bibliotecas del lenguaje de programación que estás utilizando. Esto asegura que los datos proporcionados por el usuario se traten de manera segura.

2 Validación y saneamiento de entrada: Valida y sanea todos los datos de entrada proporcionados por el usuario. Esto significa verificar que los datos cumplen con ciertos criterios antes de utilizarlos en consultas SQL y aplicar técnicas como la escape de caracteres especiales.

3 Principio de menor privilegio: Asegúrate de que las cuentas de usuario utilizadas para realizar operaciones en la base de datos tengan solo los privilegios necesarios. Evita utilizar cuentas con permisos excesivos.

4 Auditoría y registro: Lleva un registro de las consultas SQL ejecutadas y establece un sistema de auditoría para detectar posibles intentos de inyección de SQL.

### ¿Cuándo es conveniente utilizar SQL Transactions?

Las transacciones en SQL son unidades o secuencias de trabajo realizadas de forma ordenada y separada en una base de datos. Normalmente representan cualquier cambio en la base de datos, y tienen dos objetivos principales:

  - Proporcionar secuencias de trabajo fiables que permitan poder recuperarse fácilmente ante errorres y mantener una base de datos consistente incluso frente a fallos del sistema.
  - Proporcionar aislamiento entre programas accediendo a la vez a la base de datos.

Una transacción es una propagación de uno o más cambios en la base de datos, ya sea cuando se crea, se modifica o se elimina un registro. En la práctica suele consistir en la agrupación de consultas SQL y su ejecución como parte de una transacción.

#### Las transacciones siguen cuatro propiedades básicas, bajo el acrónimo ACID (Atomicity, Consistency, Isolation, Durability):

- Atomicidad: aseguran que todas las operaciones dentro de la secuencia de trabajo se completen satisfactoriamente. Si no es así, la transacción se abandona en el punto del error y las operaciones previas retroceden a su estado inicial.
- Consistencia: aseguran que la base de datos cambie estados en una transacción exitosa.
- Aislamiento: permiten que las operaciones sean aisladas y transparentes unas de otras.
- Durabilidad: aseguran que el resultado o efecto de una transacción completada permanezca en caso de error del sistema.

Un ejemplo bastante sencillo y de la vida cotidiana, lo tenemos por ejemplo al momento de realizar una compra, en la cual, al realizar nuestro pago debe cumplirse la integridad con respecto a las tablas (dare un ejemplo sencillo sobre un esquema y las tablas que lo conforman):

ventas - producto - cliente - usuario.

Al realizar una compra, se agrega un nuevo registro en la tabla VENTAS, se resta el stock al registro en la tabla PRODUCTO, al cliente se le agrega una venta y el usuario que realiza la venta tambien se le crea el registro.

### Describí brevemente las ventajas del patrón controller/service/repository

El patrón repositorio consiste en separar la lógica que recupera los datos y los asigna a un modelo de entidad de la lógica de negocios que actúa sobre el modelo, esto permite que la lógica de negocios sea independiente del tipo de dato que comprende la capa de origen de datos.

### ¿Cuál es la mejor forma de guardar un campo de tipo enum en la DB?

La forma de guardar un campo de tipo enumerado (enum) en una base de datos depende del sistema de gestión de bases de datos (DBMS) que se esté utilizando. 

- En PostgreSQL, puedes utilizar el tipo de dato ENUM nativo para almacenar valores de enumeración. 
- En MySQL, no hay un tipo de datos ENUM que funcione de la misma manera que en PostgreSQL. En su lugar, se puede utilizar el tipo de datos VARCHAR y restricciones de clave externa o verificar para garantizar la validez de los valores.
- En SQL Server, también se puede utilizar el tipo de datos VARCHAR y restricciones de clave externa o verificar.

Al elegir la representación de un enum, se debe considerar si los valores tienen un orden significativo (ordinal) o simplemente representan categorías sin un orden específico (nominal). También se puede optar por almacenar los códigos numéricos asociados con los valores enum o los nombres de los valores directamente, dependiendo de tus necesidades y preferencias.

### Usando async/await: ¿cómo se puede aprovechar el paralelismo?

Se puede aprovechar cuando se desea ejecutar multiples tareas independientes,es decir, ejecutar las tareas en paralelo. Sin embargo, hay que tener en cuenta que JavaScript se ejecuta en un solo hilo, por lo que este paralelismo se logra de manera concurrente utilizando el mecanismo de eventos de JavaScript.




# maepay
