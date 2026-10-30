# Todo List App con Autenticación — Roadmap de Desarrollo

## 1. Objetivo del proyecto

Desarrollar una aplicación web de gestión de tareas con autenticación de usuarios, utilizando Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Supabase y Vercel.

### Funcionalidades principales

- Registro de usuarios.
- Inicio y cierre de sesión.
- Protección de rutas privadas.
- Crear tareas.
- Visualizar tareas.
- Editar tareas.
- Eliminar tareas.
- Marcar tareas como completadas.
- Filtrar tareas por estado.
- Estadísticas de tareas.
- Almacenamiento persistente en base de datos.
- Aislamiento de información entre usuarios.

## 2. Tecnologías

| Tecnología | Responsabilidad |
|---|---|
| Next.js 15 (App Router) | Framework principal, rutas y renderizado. |
| TypeScript | Tipado estático y seguridad del código. |
| Tailwind CSS | Estilizado de interfaces. |
| shadcn/ui | Componentes visuales reutilizables. |
| Supabase Auth | Autenticación de usuarios. |
| Supabase Database | Base de datos PostgreSQL. |
| Supabase SSR | Gestión de sesiones mediante cookies. |
| Vercel | Despliegue y hosting. |

---

# ETAPA 1 — Preparación del entorno

**Objetivo:** configurar el entorno de desarrollo y crear el proyecto inicial.

### Tarea 1.1 — Verificar herramientas

- [ ] 1.1.1. Comprobar que Node.js está instalado.
- [ ] 1.1.2. Comprobar que npm está instalado.
- [ ] 1.1.3. Comprobar que Git está instalado.
- [ ] 1.1.4. Verificar las versiones instaladas.

### Tarea 1.2 — Crear proyecto Next.js

- [ ] 1.2.1. Crear un proyecto utilizando Next.js 15.
- [ ] 1.2.2. Seleccionar TypeScript.
- [ ] 1.2.3. Seleccionar App Router.
- [ ] 1.2.4. Configurar ESLint.
- [ ] 1.2.5. Configurar alias de importación.
- [ ] 1.2.6. Ejecutar el servidor de desarrollo.
- [ ] 1.2.7. Comprobar que funciona en localhost.

### Tarea 1.3 — Configurar Tailwind CSS

- [ ] 1.3.1. Comprobar la instalación de Tailwind CSS.
- [ ] 1.3.2. Comprender las clases utilitarias.
- [ ] 1.3.3. Configurar los estilos globales.
- [ ] 1.3.4. Crear una prueba de estilos.

### Tarea 1.4 — Configurar shadcn/ui

- [ ] 1.4.1. Inicializar shadcn/ui.
- [ ] 1.4.2. Configurar el estilo visual.
- [ ] 1.4.3. Instalar Button.
- [ ] 1.4.4. Instalar Input.
- [ ] 1.4.5. Instalar Card.
- [ ] 1.4.6. Instalar Dialog.
- [ ] 1.4.7. Instalar Checkbox.
- [ ] 1.4.8. Comprobar que los componentes funcionan.

**Resultado esperado:** proyecto Next.js 15 funcionando con TypeScript, Tailwind CSS y shadcn/ui.

---

# ETAPA 2 — Estructura del proyecto

**Objetivo:** organizar el código y comprender el funcionamiento de App Router.

### Tarea 2.1 — Comprender App Router

- [ ] 2.1.1. Comprender la carpeta `app/`.
- [ ] 2.1.2. Comprender el funcionamiento de `page.tsx`.
- [ ] 2.1.3. Comprender el funcionamiento de `layout.tsx`.
- [ ] 2.1.4. Comprender las rutas anidadas.
- [ ] 2.1.5. Comprender los Server Components.
- [ ] 2.1.6. Comprender los Client Components.
- [ ] 2.1.7. Comprender cuándo utilizar `"use client"`.

### Tarea 2.2 — Organizar archivos y carpetas

- [ ] 2.2.1. Crear la carpeta `components/`.
- [ ] 2.2.2. Crear `components/ui/`.
- [ ] 2.2.3. Crear `components/auth/`.
- [ ] 2.2.4. Crear `components/tasks/`.
- [ ] 2.2.5. Crear la carpeta `lib/`.
- [ ] 2.2.6. Crear `lib/supabase/`.
- [ ] 2.2.7. Crear la carpeta `types/`.
- [ ] 2.2.8. Crear la carpeta `hooks/` si se necesitan hooks personalizados.

### Tarea 2.3 — Crear rutas principales

- [ ] 2.3.1. Crear la ruta `/`.
- [ ] 2.3.2. Crear la ruta `/login`.
- [ ] 2.3.3. Crear la ruta `/register`.
- [ ] 2.3.4. Crear la ruta `/dashboard`.

**Resultado esperado:** estructura organizada y rutas principales preparadas.

---

# ETAPA 3 — Diseño de la interfaz

**Objetivo:** construir el frontend antes de conectar la base de datos.

### Tarea 3.1 — Página principal

- [ ] 3.1.1. Crear el layout principal.
- [ ] 3.1.2. Crear una barra de navegación.
- [ ] 3.1.3. Crear una sección de bienvenida.
- [ ] 3.1.4. Crear una descripción de la aplicación.
- [ ] 3.1.5. Crear un botón para registrarse.
- [ ] 3.1.6. Crear un botón para iniciar sesión.

### Tarea 3.2 — Dashboard

- [ ] 3.2.1. Crear el encabezado.
- [ ] 3.2.2. Crear una sección de bienvenida.
- [ ] 3.2.3. Crear una sección de estadísticas.
- [ ] 3.2.4. Mostrar cantidad de tareas pendientes.
- [ ] 3.2.5. Mostrar cantidad de tareas completadas.
- [ ] 3.2.6. Crear el listado de tareas.
- [ ] 3.2.7. Crear el botón para agregar tareas.
- [ ] 3.2.8. Crear un menú de usuario.

### Tarea 3.3 — Componentes de tareas

- [ ] 3.3.1. Crear `TaskCard`.
- [ ] 3.3.2. Crear `TaskList`.
- [ ] 3.3.3. Crear `TaskForm`.
- [ ] 3.3.4. Crear `TaskFilters`.
- [ ] 3.3.5. Crear `TaskStats`.
- [ ] 3.3.6. Crear `DeleteTaskDialog`.

### Tarea 3.4 — Formularios visuales

- [ ] 3.4.1. Crear formulario de registro.
- [ ] 3.4.2. Crear formulario de inicio de sesión.
- [ ] 3.4.3. Crear formulario para crear tareas.
- [ ] 3.4.4. Crear formulario para editar tareas.

**Resultado esperado:** interfaz visual funcional utilizando datos ficticios.

---

# ETAPA 4 — Modelado de datos y Supabase

**Objetivo:** preparar la base de datos y sus mecanismos de seguridad.

### Tarea 4.1 — Crear proyecto Supabase

- [ ] 4.1.1. Crear una cuenta en Supabase.
- [ ] 4.1.2. Crear un proyecto.
- [ ] 4.1.3. Configurar la contraseña de la base de datos.
- [ ] 4.1.4. Identificar la URL del proyecto.
- [ ] 4.1.5. Obtener la clave pública publishable o anon.
- [ ] 4.1.6. Familiarizarse con el panel de Supabase.

### Tarea 4.2 — Diseñar tabla tasks

Crear una tabla llamada `tasks` con las siguientes columnas:

| Columna | Tipo | Descripción |
|---|---|---|
| id | uuid | Identificador único. |
| user_id | uuid | Identificador del propietario. |
| title | text | Título de la tarea. |
| description | text | Descripción de la tarea. |
| completed | boolean | Estado de finalización. |
| created_at | timestamptz | Fecha de creación. |
| updated_at | timestamptz | Última actualización. |

Subtareas:

- [ ] 4.2.1. Crear tabla `tasks`.
- [ ] 4.2.2. Configurar `id` como clave primaria.
- [ ] 4.2.3. Configurar `user_id` como referencia al usuario autenticado.
- [ ] 4.2.4. Configurar valores predeterminados.
- [ ] 4.2.5. Configurar fechas automáticas.
- [ ] 4.2.6. Comprender las relaciones entre tablas.

### Tarea 4.3 — Configurar Row Level Security (RLS)

- [ ] 4.3.1. Comprender qué es RLS.
- [ ] 4.3.2. Activar RLS en `tasks`.
- [ ] 4.3.3. Crear política SELECT para consultar tareas propias.
- [ ] 4.3.4. Crear política INSERT para insertar tareas propias.
- [ ] 4.3.5. Crear política UPDATE para actualizar tareas propias.
- [ ] 4.3.6. Crear política DELETE para eliminar tareas propias.
- [ ] 4.3.7. Verificar que un usuario no pueda consultar tareas ajenas.
- [ ] 4.3.8. Verificar que un usuario no pueda modificar tareas ajenas.

**Resultado esperado:** base de datos funcional y protegida mediante RLS.

---

# ETAPA 5 — Integración de Supabase con Next.js

**Objetivo:** conectar el frontend con Supabase y preparar la gestión de sesiones.

### Tarea 5.1 — Instalar dependencias

- [ ] 5.1.1. Instalar `@supabase/supabase-js`.
- [ ] 5.1.2. Instalar `@supabase/ssr`.
- [ ] 5.1.3. Comprobar que las dependencias funcionan.

### Tarea 5.2 — Configurar variables de entorno

- [ ] 5.2.1. Crear el archivo `.env.local`.
- [ ] 5.2.2. Configurar `NEXT_PUBLIC_SUPABASE_URL`.
- [ ] 5.2.3. Configurar `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` o la clave pública correspondiente.
- [ ] 5.2.4. Verificar que las variables se carguen correctamente.
- [ ] 5.2.5. Agregar `.env.local` al `.gitignore`.
- [ ] 5.2.6. Evitar exponer claves secretas.

### Tarea 5.3 — Crear clientes Supabase

- [ ] 5.3.1. Crear cliente para Server Components.
- [ ] 5.3.2. Crear cliente para Client Components.
- [ ] 5.3.3. Configurar lectura y escritura de cookies.
- [ ] 5.3.4. Comprender las diferencias entre ambos clientes.
- [ ] 5.3.5. Comprobar la conexión con Supabase.

### Tarea 5.4 — Configurar sesiones SSR

- [ ] 5.4.1. Comprender cómo funcionan las cookies de autenticación.
- [ ] 5.4.2. Crear el archivo `proxy.ts` o la configuración correspondiente a Next.js 15.
- [ ] 5.4.3. Implementar la actualización de sesiones.
- [ ] 5.4.4. Comprender cómo obtener el usuario autenticado desde el servidor.
- [ ] 5.4.5. Verificar la persistencia de sesión al recargar la página.

**Resultado esperado:** Next.js conectado con Supabase y preparado para gestionar sesiones.

---

# ETAPA 6 — Sistema de autenticación

**Objetivo:** permitir que los usuarios se registren, inicien sesión y accedan a sus cuentas.

### Tarea 6.1 — Registro de usuarios

- [ ] 6.1.1. Crear la página `/register`.
- [ ] 6.1.2. Crear formulario de registro.
- [ ] 6.1.3. Agregar campo de email.
- [ ] 6.1.4. Agregar campo de contraseña.
- [ ] 6.1.5. Agregar confirmación de contraseña.
- [ ] 6.1.6. Implementar validación de campos.
- [ ] 6.1.7. Integrar `signUp()` de Supabase.
- [ ] 6.1.8. Gestionar errores de registro.
- [ ] 6.1.9. Gestionar confirmación de correo electrónico.
- [ ] 6.1.10. Mostrar mensajes de éxito.

### Tarea 6.2 — Inicio de sesión

- [ ] 6.2.1. Crear la página `/login`.
- [ ] 6.2.2. Crear formulario de inicio de sesión.
- [ ] 6.2.3. Agregar campo de email.
- [ ] 6.2.4. Agregar campo de contraseña.
- [ ] 6.2.5. Validar los campos.
- [ ] 6.2.6. Implementar `signInWithPassword()`.
- [ ] 6.2.7. Gestionar errores de autenticación.
- [ ] 6.2.8. Redireccionar al dashboard.

### Tarea 6.3 — Cierre de sesión

- [ ] 6.3.1. Crear botón para cerrar sesión.
- [ ] 6.3.2. Implementar `signOut()`.
- [ ] 6.3.3. Finalizar correctamente la sesión.
- [ ] 6.3.4. Redireccionar al login.
- [ ] 6.3.5. Comprobar que el usuario ya no pueda acceder al dashboard.

### Tarea 6.4 — Protección de rutas

- [ ] 6.4.1. Proteger `/dashboard`.
- [ ] 6.4.2. Redireccionar usuarios no autenticados.
- [ ] 6.4.3. Evitar que usuarios autenticados accedan innecesariamente a login y registro.
- [ ] 6.4.4. Verificar la autenticación en las operaciones del servidor.
- [ ] 6.4.5. Comprobar que la protección no dependa únicamente del frontend.

**Resultado esperado:** sistema de autenticación completo y funcional.

---

# ETAPA 7 — CRUD de tareas

**Objetivo:** implementar las operaciones principales de gestión de tareas.

### Tarea 7.1 — Crear tareas (Create)

- [ ] 7.1.1. Crear formulario de tareas.
- [ ] 7.1.2. Agregar campo de título.
- [ ] 7.1.3. Agregar campo de descripción.
- [ ] 7.1.4. Validar que el título no esté vacío.
- [ ] 7.1.5. Obtener el usuario autenticado.
- [ ] 7.1.6. Implementar inserción en Supabase.
- [ ] 7.1.7. Asociar la tarea con el usuario autenticado.
- [ ] 7.1.8. Actualizar la interfaz después de crearla.
- [ ] 7.1.9. Gestionar posibles errores.

### Tarea 7.2 — Consultar tareas (Read)

- [ ] 7.2.1. Obtener las tareas del usuario autenticado.
- [ ] 7.2.2. Consultar los datos desde Supabase.
- [ ] 7.2.3. Ordenar las tareas por fecha de creación.
- [ ] 7.2.4. Mostrar las tareas en el dashboard.
- [ ] 7.2.5. Crear un estado vacío cuando no existan tareas.
- [ ] 7.2.6. Gestionar errores de consulta.

### Tarea 7.3 — Editar tareas (Update)

- [ ] 7.3.1. Crear botón de edición.
- [ ] 7.3.2. Abrir formulario con los datos existentes.
- [ ] 7.3.3. Permitir modificar el título.
- [ ] 7.3.4. Permitir modificar la descripción.
- [ ] 7.3.5. Validar los datos.
- [ ] 7.3.6. Actualizar el registro en Supabase.
- [ ] 7.3.7. Reflejar los cambios en la interfaz.

### Tarea 7.4 — Eliminar tareas (Delete)

- [ ] 7.4.1. Crear botón de eliminación.
- [ ] 7.4.2. Mostrar diálogo de confirmación.
- [ ] 7.4.3. Implementar eliminación en Supabase.
- [ ] 7.4.4. Actualizar la interfaz.
- [ ] 7.4.5. Gestionar errores de eliminación.

**Resultado esperado:** CRUD completamente funcional.

---

# ETAPA 8 — Estados, filtros y estadísticas

**Objetivo:** mejorar la organización y visualización de las tareas.

### Tarea 8.1 — Completar tareas

- [ ] 8.1.1. Agregar checkbox a cada tarea.
- [ ] 8.1.2. Cambiar el estado `completed`.
- [ ] 8.1.3. Guardar el cambio en Supabase.
- [ ] 8.1.4. Actualizar visualmente la tarea.
- [ ] 8.1.5. Comprobar que el estado persista al recargar.

### Tarea 8.2 — Filtrar tareas

- [ ] 8.2.1. Crear filtro Todas.
- [ ] 8.2.2. Crear filtro Pendientes.
- [ ] 8.2.3. Crear filtro Completadas.
- [ ] 8.2.4. Implementar la lógica de filtrado.
- [ ] 8.2.5. Comprobar que los filtros funcionen correctamente.
- [ ] 8.2.6. Mostrar mensajes cuando no existan resultados.

### Tarea 8.3 — Estadísticas

- [ ] 8.3.1. Calcular el total de tareas.
- [ ] 8.3.2. Calcular tareas pendientes.
- [ ] 8.3.3. Calcular tareas completadas.
- [ ] 8.3.4. Mostrar estadísticas en el dashboard.
- [ ] 8.3.5. Actualizar estadísticas al modificar tareas.

**Resultado esperado:** dashboard con filtros y estadísticas dinámicas.

---

# ETAPA 9 — Validaciones y experiencia de usuario

**Objetivo:** mejorar la robustez y la experiencia de uso.

### Tarea 9.1 — Validaciones

- [ ] 9.1.1. Instalar Zod.
- [ ] 9.1.2. Crear esquemas de validación.
- [ ] 9.1.3. Validar formularios de autenticación.
- [ ] 9.1.4. Validar formularios de tareas.
- [ ] 9.1.5. Mostrar mensajes de error.
- [ ] 9.1.6. Validar los datos también en el servidor.

### Tarea 9.2 — Estados de interfaz

- [ ] 9.2.1. Crear indicadores de carga.
- [ ] 9.2.2. Crear mensajes de éxito.
- [ ] 9.2.3. Crear mensajes de error.
- [ ] 9.2.4. Evitar envíos duplicados.
- [ ] 9.2.5. Crear estados vacíos.
- [ ] 9.2.6. Mejorar la respuesta visual de los botones.

### Tarea 9.3 — Responsive Design

- [ ] 9.3.1. Adaptar el dashboard a móviles.
- [ ] 9.3.2. Adaptar el dashboard a tablets.
- [ ] 9.3.3. Adaptar el dashboard a escritorio.
- [ ] 9.3.4. Comprobar formularios en pantallas pequeñas.
- [ ] 9.3.5. Verificar navegación en dispositivos móviles.

**Resultado esperado:** aplicación consistente, validada y adaptable a diferentes dispositivos.

---

# ETAPA 10 — Testing y seguridad

**Objetivo:** comprobar el correcto funcionamiento de la aplicación y detectar vulnerabilidades.

### Tarea 10.1 — Pruebas funcionales

- [ ] 10.1.1. Probar el registro.
- [ ] 10.1.2. Probar el inicio de sesión.
- [ ] 10.1.3. Probar el cierre de sesión.
- [ ] 10.1.4. Probar la protección de rutas.
- [ ] 10.1.5. Probar la creación de tareas.
- [ ] 10.1.6. Probar la consulta de tareas.
- [ ] 10.1.7. Probar la edición de tareas.
- [ ] 10.1.8. Probar la eliminación de tareas.
- [ ] 10.1.9. Probar los filtros.
- [ ] 10.1.10. Probar la persistencia de datos.

### Tarea 10.2 — Pruebas de seguridad

- [ ] 10.2.1. Verificar las políticas RLS.
- [ ] 10.2.2. Comprobar el aislamiento entre usuarios.
- [ ] 10.2.3. Verificar que no se expongan claves secretas.
- [ ] 10.2.4. Verificar la protección de rutas.
- [ ] 10.2.5. Comprobar las validaciones del servidor.
- [ ] 10.2.6. Verificar que las operaciones no permitan modificar tareas ajenas.

### Tarea 10.3 — Calidad del código

- [ ] 10.3.1. Ejecutar ESLint.
- [ ] 10.3.2. Ejecutar comprobación de TypeScript.
- [ ] 10.3.3. Ejecutar build de producción.
- [ ] 10.3.4. Corregir errores.
- [ ] 10.3.5. Corregir advertencias importantes.
- [ ] 10.3.6. Revisar organización y reutilización de componentes.

**Resultado esperado:** aplicación estable, probada y segura.

---

# ETAPA 11 — Despliegue en Vercel

**Objetivo:** publicar la aplicación en internet.

### Tarea 11.1 — Preparar GitHub

- [ ] 11.1.1. Crear un repositorio.
- [ ] 11.1.2. Configurar `.gitignore`.
- [ ] 11.1.3. Verificar que `.env.local` no se suba.
- [ ] 11.1.4. Crear commit inicial.
- [ ] 11.1.5. Subir el proyecto a GitHub.
- [ ] 11.1.6. Comprobar que el repositorio esté actualizado.

### Tarea 11.2 — Configurar Vercel

- [ ] 11.2.1. Crear una cuenta en Vercel.
- [ ] 11.2.2. Conectar GitHub.
- [ ] 11.2.3. Importar el repositorio.
- [ ] 11.2.4. Configurar las variables de entorno.
- [ ] 11.2.5. Ejecutar el despliegue.
- [ ] 11.2.6. Comprobar que la aplicación esté disponible.
- [ ] 11.2.7. Verificar los logs de despliegue.

### Tarea 11.3 — Configurar Supabase para producción

- [ ] 11.3.1. Configurar la URL de producción.
- [ ] 11.3.2. Configurar las URL de redirección de autenticación.
- [ ] 11.3.3. Configurar la URL del sitio en Supabase.
- [ ] 11.3.4. Verificar la confirmación de correo.
- [ ] 11.3.5. Probar el registro desde producción.
- [ ] 11.3.6. Probar el inicio de sesión desde producción.
- [ ] 11.3.7. Comprobar el acceso al dashboard.

**Resultado esperado:** aplicación publicada y accesible desde internet.

---

# ETAPA 12 — Mejoras opcionales

**Objetivo:** ampliar las funcionalidades y mejorar el proyecto para el portfolio.

### Tarea 12.1 — Prioridades

- [ ] 12.1.1. Agregar prioridad baja.
- [ ] 12.1.2. Agregar prioridad media.
- [ ] 12.1.3. Agregar prioridad alta.
- [ ] 12.1.4. Permitir filtrar por prioridad.

### Tarea 12.2 — Fechas límite

- [ ] 12.2.1. Agregar columna `due_date`.
- [ ] 12.2.2. Permitir asignar fechas límite.
- [ ] 12.2.3. Mostrar fechas en las tareas.
- [ ] 12.2.4. Identificar tareas vencidas.

### Tarea 12.3 — Categorías

- [ ] 12.3.1. Diseñar una tabla de categorías.
- [ ] 12.3.2. Relacionar tareas con categorías.
- [ ] 12.3.3. Permitir asignar categorías.
- [ ] 12.3.4. Filtrar tareas por categoría.

### Tarea 12.4 — Búsqueda y ordenamiento

- [ ] 12.4.1. Agregar buscador.
- [ ] 12.4.2. Buscar tareas por título.
- [ ] 12.4.3. Ordenar por fecha de creación.
- [ ] 12.4.4. Ordenar por fecha límite.
- [ ] 12.4.5. Ordenar por prioridad.

### Tarea 12.5 — Personalización

- [ ] 12.5.1. Agregar modo oscuro.
- [ ] 12.5.2. Agregar modo claro.
- [ ] 12.5.3. Agregar perfil de usuario.
- [ ] 12.5.4. Agregar recuperación de contraseña.
- [ ] 12.5.5. Agregar paginación.

---

# 3. Reglas técnicas del proyecto

1. Utilizar Server Components por defecto.
2. Utilizar `"use client"` solamente cuando sea necesario.
3. Utilizar TypeScript estricto.
4. Evitar el uso innecesario de `any`.
5. Implementar RLS en todas las tablas que contengan datos privados.
6. No confiar exclusivamente en la protección del frontend.
7. Utilizar `@supabase/ssr` para gestionar sesiones.
8. Nunca exponer la clave `service_role` en el navegador.
9. Validar los datos tanto en el cliente como en el servidor.
10. Mantener las dependencias compatibles con Next.js 15.
11. Realizar commits pequeños y descriptivos.
12. No avanzar a otra etapa sin comprobar que la anterior funciona.

# 4. Metodología de desarrollo

El desarrollo se realizará de forma incremental.

- Trabajar una subtarea por vez.
- Antes de programar, comprender el objetivo de la subtarea.
- Intentar resolver el problema de manera independiente.
- Revisar los errores antes de modificar código.
- Realizar un segundo intento cuando la primera solución falle.
- Si no se consigue resolver el problema, estudiar una solución guiada.
- Comprobar el funcionamiento antes de marcar la subtarea como completada.
- No implementar funcionalidades de etapas futuras anticipadamente.

**Criterio de finalización:** una tarea solamente se considera completada cuando está implementada, funciona correctamente y ha sido comprobada.

# 5. Criterio de finalización del proyecto

El MVP estará terminado cuando:

- Los usuarios puedan registrarse.
- Los usuarios puedan iniciar y cerrar sesión.
- Las rutas privadas estén protegidas.
- Los usuarios puedan crear tareas.
- Los usuarios puedan consultar sus tareas.
- Los usuarios puedan editar tareas.
- Los usuarios puedan eliminar tareas.
- Los usuarios puedan completar tareas.
- Los filtros funcionen correctamente.
- Los datos persistan en Supabase.
- RLS impida acceder a tareas de otros usuarios.
- La aplicación sea responsive.
- El proyecto supere las comprobaciones de TypeScript y ESLint.
- El despliegue en Vercel funcione correctamente.

**Fin del roadmap.**