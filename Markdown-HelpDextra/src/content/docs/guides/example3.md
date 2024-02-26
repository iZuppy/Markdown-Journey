---
title: Tipos de datos
description: Arrancamos con JavaScript. Su definición, historia y características.
---

En _JavaScript_, como cualquier otro lenguaje de programación, vamos a querer **trasladar la información del mundo real a nuestro código**. Para ello, necesitamos entender qué tipos de datos existen en el lenguaje para poder representar la información que necesitamos.

**En JavaScript tenemos 9 tipos de datos** que se dividen en dos grandes grupos: primitivos o no primitivos. **Más adelante te contaré qué significa esto**, pero por ahora, vamos a ver los tipos primitivos.

Dentro de los tipos primitivos tenemos 7 tipos de datos:

- **number**
- **string**
- **boolean**
- **null**
- **undefined**
- **symbol**
- **bigint**

No te preocupes, **no tienes ni que recordarlos ni entenderlos todos ahora**. En esta lección vamos a ver los tres primeros que son, sin ninguna duda, los que más vamos a usar al inicio del curso.

---

### Operadores aritméticos

Con los números, puedes usar los **operadores aritméticos** para realizar operaciones matemáticas. En JavaScript tenemos los siguientes operadores aritméticos:

- +: suma
- -: resta
- \*: multiplicación
- /: división
- %: módulo (resto de la división)
- \*\*: exponente

Al usar los operadores aritméticos, **el resultado siempre será un número**. Por ejemplo:

```js
2 + 2; // 4
4 - 2; // 2
2 * 2; // 6
2 / 2; // 1
2 % 2; // 0
3 ** 3; // 27
```

> ¿Qué significa el **//** que ves en los ejemplos? Es un comentario. En JavaScript, los comentarios se escriben con **//** y todo lo que escribas después de **//** será ignorado por el navegador. Los comentarios son muy útiles para explicar qué hace nuestro código.

Al igual que las matemáticas, **las operaciones siguen un orden de precedencia**. Por ejemplo, si queremos
