# **Reto React Básico**: Parte 1

### Descripción
" Escribe una función que identifique el valor que se repite más veces en un array:
Ejemplo: [a, b ,c, a, a, b, c, c, c]
Salida: c
Explica tu solución y por qué consideras que es óptima (Big O) "


### Código desarrollado

```js
function getTheMostRepeatedChar(arr) {
  let maxRepetition = 0;
  let charRepetitions = {};

  if (arr.length === 0) return;

  for (const char of arr) {
    charRepetitions = charRepetitions.hasOwnProperty(char)
      ? { ...charRepetitions, [char]: charRepetitions[char] + 1 }
      : { ...charRepetitions, [char]: 1 };

    maxRepetition =
      charRepetitions[char] > maxRepetition
        ? charRepetitions[char]
        : maxRepetition;
  }

  const charRepetitionsArray = Object.entries(charRepetitions);

  const mostRepeatedChar = charRepetitionsArray.find(
    (item) => item[1] === maxRepetition && item[0]
  );

  return mostRepeatedChar[0];
}

console.log(
  'El elemento que mas se repite de ["a", "b", "c", "a", "a", "a", "b", "c", "c", "c"] es',
  getTheMostRepeatedChar(["a", "b", "c", "a", "a", "a", "b", "c", "c", "c"])
);

console.log(
  'El elemento que mas se repite de ["a", "b", "c", "a", "a", "b", "c", "c", "c"] es',
  getTheMostRepeatedChar(["a", "b", "c", "a", "a", "b", "c", "c", "c"])
);

console.log(
  'El elemento que mas se repite de ["a", "b", "c"] es',
  getTheMostRepeatedChar([])
);
```

### Explicación

1. Declaración e inicialización de variable `maxRepetitions` para almacenar la repetición máxima.

2. Declaración e inicialización de objeto `charRepetitions` vacío el cual almacenará cada uno de los caracteres del array recibido como parámetro con sus correspondientes números de repeticiones.
3. Ciclo for: Se recorre cada elemento del array de caracteres y se verifica si el objeto `charRepetitions` tiene como una de sus `keys` el caracter actual.

   - _Sí_: Se actualiza el valor del `key`del objeto para aumentar la cuenta de repeticiones.
   - _No_: Se agrega una propiedad al objeto con `key = caracter actual` y se inicializa el número de repeticiones en 1.

   Se verifica si el caracter actual (`key` actual del `charRepetitions`) es mayor a `maxRepetitions`:

   - _Sí_: Se actualiza `maxRepetitions` con el valor del `key` actual.
   - _No_: Se mantiene el valor máximo de repeticiones.

4. Las propiedades del objeto `charRepetitions` se transforman en arrays y se almacenan en `charRepetitionsArray`.

5. Del array `charRepetitionsArray` se localiza el primer subarray que tenga el número `maxRepetitions` y se obtiene el caracter al que está asociado.
6. La funcion retorna el caracter más repetido.
 - Si existen dos valores que mas se repiten, arrojará el primero que encuentre.
 - Si reciben un array vacío retorna `undefined`.

### Big O

La obtención del n'umero de repeticiones máximas de cada caracter se ha realizado evitando complejidades de **O(n^2)** debido a `loops anidados`

```js
for (const char of arr) {
  charRepetitions = charRepetitions.hasOwnProperty(char)
    ? { ...charRepetitions, [char]: charRepetitions[char] + 1 }
    : { ...charRepetitions, [char]: 1 };

  maxRepetition =
    charRepetitions[char] > maxRepetition
      ? charRepetitions[char]
      : maxRepetition;
}
```

- Ciclo `for` con complejidad **O(n)**
- El método de los objetos `Object.hasOwnProperty()` con complejidad **O(1)**
- Las demás operaciones de acceso a valores  a traves llaves de objetos se consideran de complejidad **O(1)**;
  Por lo tanto: La complejidad para este fragmento de código es:
  **O(n) * O(1) * O(1) = O(n)**

```js
  const charRepetitionsArray = Object.entries(charRepetitions);

  const mostRepeatedChar = charRepetitionsArray.find(
    (item) => item[1] === maxRepetition && item[0]
  );

  return mostRepeatedChar[0];
```
- La función de los objetos para obtener sus propiedades como un array de subarrays `Object.entries()` tiene complejidad **O(n)**.
- La función de los arrays para encontrar un elemento `Array.find()` tiene complejidad **O(n)**
  - En el scope de esta función se realizan operaciones de acceso a valores de arrays por medio de índices lo cual tiene una complejidad de **O(1)**.

- Finalmente se obtiene el valor de un array por medio de un index: **O(1)**.

Para esta sección se obtiene una complejidad de **O(n) + O(n) + O(1) = O(2n) = O(n)**


#### Realizando la sumatoria de las complejidades obtenidas en ambos fragmentos de código

**O(n) + O(n) = O(2n) = O(n)**


Se obtiene una complejidad de **O(n)** lo cual indica que el algoritmo es eficiente, el punto más claro para lograr esto ha sido la NO utilizacion de loops anidados los cuales pueden generar complejidades exponenciales.


##### Referencias
https://javascript.plainenglish.io/performance-of-arrays-and-objects-in-javascript-through-the-lens-of-big-o-5a7c5891a43f

https://www.digitalocean.com/community/tutorials/js-big-o-notation

https://javascript.plainenglish.io/an-intro-to-big-o-in-javascript-a-k-a-dont-mess-up-ur-interview-u-silly-nub-8082005e47c2