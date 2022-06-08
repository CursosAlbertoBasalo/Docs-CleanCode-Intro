# ➰ Estructuras repetitivas y condicionales

## Bloques: Aquí vive la lógica.

> "Cada vez que escribas un comentario, debes sentirlo como un fallo de tu capacidad de expresión"
>
> -- ✍️ **Robert C. Martin**

---

## ❓ Condicionales

- Si hay un `if` debes ponerlo cuanto antes. Idealmente lo primero.

- Valorar el retorno **anticipado** _vs_ el retorno **unificado.**

- La condición es una expresión... y tiene que ser sencilla 🍭

- Envolver los bloques siempre 🔑 entre llaves.🗝

- Evitar los ~~switches~~.

## ➿ Repetitivas

- La condición de ruptura es una expresión... y tiene que ser sencilla 🍭.

- Las variables **locales** deben ser legibles.

- Se permiten los índices clásicos `i, j` para bucles.

- Se permite abreviaturas en funciones de segundo orden triviales

---

## 👮 Atajos a vigilar

- ⚠️ Operadores ternarios

  - `variable = condition ? value_if_true : value_if_false`

- ⚠️ Operadores lógicos

  - `value = value || defaultValue;`

  - `anObject && anObject.doSomething();`

> No encadenes o agrupes estos atajos.

> Úsalos sólo como una abreviación de casos muy simples.

> Usa características del lenguaje para evitar tratar nulos.

## ⚠️ Límites

- ✅1---2❌ niveles de anidamiento
- ✅1---4❌ instrucciones por bloque

## Consecuencias

- 🛢️ Te obliga a **extraer** código a funciones.
- 🏷️ Te obliga a **nombrar** las nuevas funciones.
- 💼 Más **reglas de negocio** en tu código.
- 💬 **Cero** necesidad de comentarios.

---

- [⏭️ Next: 🧩 Funciones puras y métodos de clase.](./3-funciones_puras_y_metodos_de_clase.md)
