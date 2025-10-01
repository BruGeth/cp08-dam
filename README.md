# 📱 UserPostsApp - Semana 08 | Desarrollo de Aplicaciones Móviles

Aplicación móvil desarrollada en **React Native (Expo)** como parte del laboratorio de la semana 08 del curso *Desarrollo de Aplicaciones Móviles* – UTP. El objetivo principal es consumir una API pública REST para mostrar información dinámica de usuarios y sus publicaciones, con navegación entre pantallas y manejo de estados.

## 🧠 Descripción del proyecto

UserPostsApp permite:

- Mostrar una lista de usuarios obtenida desde una API pública.
- Navegar al detalle de cada usuario para ver sus publicaciones.
- Manejar estados de carga y error.
- Aplicar estilos básicos para mejorar la experiencia visual.

La app utiliza `fetch` o `axios` para consumir datos desde [JSONPlaceholder](https://jsonplaceholder.typicode.com/), una API gratuita para pruebas.

## ✅ Retos cumplidos

- [x] Mostrar lista de usuarios con nombre, correo y ciudad.
- [x] Navegar a pantalla de detalle al seleccionar un usuario.
- [x] Mostrar publicaciones del usuario (título + contenido).
- [x] Mostrar spinner o texto “Cargando…” mientras se obtienen los datos.
- [x] Mostrar mensaje de error si falla la carga.
- [x] Estilizar la lista con cards.
- [x] Agregar botón de recarga.
- [x] Mostrar contador de publicaciones (ejemplo: “Mostrando 10 publicaciones”).

## 🧭 Estructura del proyecto

```
UserPostsApp/
├── App.js
├── screens/
│   ├── UsersScreen.js
│   └── PostsScreen.js
```

## 📸 Capturas de pantalla

| Lista de Usuarios | Detalle de Publicaciones |
|-------------------|---------------------------|
| ![Usuarios](https://github.com/user-attachments/assets/52820767-8a3c-4fdd-8519-923fef382acb) | ![Posts](https://github.com/user-attachments/assets/1bc82307-93d6-4042-aaa6-6b70c541532c) |

## 🚀 Tecnologías utilizadas

- React Native + Expo
- Axios / Fetch
- React Navigation
- FlatList
- Hooks (`useState`, `useEffect`)

## 🧪 Aprendizajes clave

- Consumo de APIs REST en apps móviles.
- Navegación entre pantallas con parámetros.
- Manejo de estados asincrónicos.
- Diseño básico con componentes reutilizables.

## 📚 Autor

Bruno Guerra | [GitHub](https://github.com/BruGeth)  
Curso: Desarrollo de Aplicaciones Móviles – UTP  
Profesor: Ing. Omar Machuca
