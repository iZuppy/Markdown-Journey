---
title: Los operadores de comparación
description: Arrancamos con JavaScript. Su definición, historia y características.
---

Los operadores de comaparación en JavaScript **nos permiten comparar dos valores**. Siempre devuelven un valor booleano **(true o false)**

Por ejemplo, podemos comparar si un número es mayor que otro con el operador **>**, o si un número es menor que otro con el operador **<**.

```js
5 > 3; // true
5 < 3; // false
```

También tenemos los operadores **>=** y **<=** que nos permiten comparar si un número es menor o igual que otro.

```js
5 >= 3; // true
5 >= 5; // true
5 <= 3; // false
5 <= 5; // true
```

Para saber si dos valores son iguales podemos usar el operador **==** o, para saber si son diferentes, el operador **!==**.

```js
5 === 5; // true
5 !== 5; // false
```

### Comparando cadenas de texto

No sólo podemos usar los comparadores para comparar números, también podemos usarlos para comparar cadenas de texto y otros tipos de datos.

```js
"JavaScript" === "JavaScript"; // true
"JavaScript" === "Java"; // false
("JavaScript" ===
  "PHP" // false
  `Estoy aprendiendo JavaScript`) ===
  "Estoy aprendiendo JavaScript"; // true
```

> Fíjate que puedes comparar cadenas de texto que usan comillas simples, dobles o acentos graves. Al final, siguen siendo cadenas de texto y lo importante es que sean iguales.

#### ¿Y si usammos el operador > con cadenas de texto?

Aunque no es muy común, podemos usar los operadores **>**, **>=**, **<** y **<=** para comparar cadenas de texto.

_JavaScript comparará las cadenas de texto según el valor del código Unicode_

Por ejemplo. la letra **A** tiene un valor de **65** y la letra **B** tiene un valor de **66**. Por lo tanto, la letra **A** es menor que la letra **B**. Pero ten cuidado, ya que **las letras mayúsculas tienen un valor menor que las letras minúsculas**.

```js
"Alfa" > "Beta"; // false
"Omega" > "Beta"; // true
"alfa" > "Alfa"; // true
```

### Comparando booleanos

También podemos comparar booleanos con los operadores de comparación.

```js
true === true; // true
true === false; // false
false !== false; // false
```

Por si te preguntas cómo se comportan los operadores de mayor o menor que (**> y <**) con booleanos te diré que, aunque no tiene sentido, debes saber que **true es mayor que false**.

```js
true > false; // true
false < true; // true
true > true; // true
false < false; // false
```

### Comparando valores de diferentes tipos

Por ahora hemos visto cómo comparar valores de un mismo tipo, pero ¿Qué pasa si queremos comparar valores de diferentes tipos? **En JavaScript es algo que es posible pero no suele ser recomendable**.

En clases posteriores veremos cómo funciona este tipo de mecanismo y **explicaremos el operador de igualdad débil ==** y el operador de desigualdad débil **!=** pero, por ahora, nos limitaremos a utilizar siempre el operador de igualdad estricta **===** y el operador de desigualdad estricta **!==**.
