# 🏗️ Construcción de aplicaciones

## Componentes: Agrupación de clases con un propósito

> "La **simplicidad** consiste en,
>
> extraer lo **obvio**
>
> y agregar lo **significativo**."
>
> -- ✍️ **John Maeda**

---

## 🛠️ Colaboradores que usamos

- Muchos colaboradores aumenta la posibilidad de acoplamiento 🧑‍🤝‍🧑

- Puede indicar demasiada responsabilidad 😰

## 🏥 Dependientes que nos usan (Responsabilidad)

- Podemos convertirnos en un factor bloqueante 🧱

- O peor aún, en una God Class 😶‍🌫️

## 🤤 Envidia de funcionalidad

- Usar muchas propiedades y métodos de otro 🤤

## 💑 Intimidad inapropiada

- Conoces las interioridades del otro 🥰

## 🤡 Ley de Demeter

- No hables con extraños 😱

- No más de un _punto_ después del `this.` 🔵

## 🔀 Command | Query

- ❗ **Ordenas** un cambio del estado

- ❓ O **consultas** el valor del estado

- Pero _no ambas_ ⁉️

---

## ⚠️ Límites

- ✅1------9❌ _Colaboradores_
- ✅1------9❌ _Dependientes_
- ✅0------1❌ _Puntos de referencia_

## 🛕 Mantra

### ⬆️ Alta cohesión

- Usar _mis_ propiedades en _mis_ métodos

### ⬇️ Bajo acoplamiento

- Si cambian mis _colaboradores_ no me afecta

---

- [⏭️ Next: 📝 Hacer las cosas bien.](../5-artisan/1-hacer_las_cosas_bien.md)
