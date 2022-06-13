# 🗃️ Cohesion de primitivos

## Agrupación de variables con sentido de negocio.

> "Asigna un valor de negocio a lo que son datos sueltos."
>
> -- ✍️ **Alguien que ha programado mucho**

---

## 💞 Cohesionan variables relacionadas

## 📦 Suelen tener nombres de Entidades de negocio

## 😶 Sin comportamiento, un poco **Data Transfer Objects**

## 🎁 Con funciones de validación se convierten en **Value Objects**

## 🎁 Con funciones de negocio se convierten en **Entities**

## 👴 _Composición_ mejor que ~~herencia~~

---

## ⚠️ Límites (revisar el modelo cuando nos pasemos)

- ✅1---2❌ variables con tipos primitivos
- ✅2---8❌ propiedades primitivas por estructura
- ✅2---8❌ propiedades compuestas por agregado
- ✅1---2❌ niveles de jerarquía
- ✅0---1❌ niveles de herencia

---

> "La verdad sólo se encuentra en un lugar: el código"
>
> -- ✍️ **Robert C. Martin**

---

- [⏭️ Next: 🧱 Cohesión de funciones](../4-object/1-cohesion_de_funciones.md)
