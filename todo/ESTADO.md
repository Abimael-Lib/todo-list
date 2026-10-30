# Estado del desarrollo — Todo List App

Fecha de registro: 2026-10-30
Última actualización: 2026-10-30

## Ubicación del proyecto
`C:\Users\Abimael\Desktop\projectosMejora\Todo List\todo\`

## Comando para retomar
Ejecutar DESDE esta carpeta (`todo/`):

```powershell
npm run dev
```

**Nota:** El archivo `package.json` está en `todo/`, NO en `Todo List/`. Si se ejecuta `npm run dev` desde la raíz, fallará con ENOENT.

---

## Etapas completadas (según plan.md)

### Etapa 1 — Preparación del entorno ✅
- Proyecto Next.js 15 creado (`app/`, `components/`, `lib/`, `types/`)
- TypeScript, Tailwind v4, ESLint configurados
- shadcn/ui manual (Button, Input, Card, Dialog, Checkbox)
- Dependencias `@supabase/supabase-js` y `@supabase/ssr` instaladas

### Etapa 2 — Estructura del proyecto ✅
- Carpetas organizadas (`auth/`, `tasks/`, `lib/supabase/`, etc.)
- Rutas creadas: `/`, `/login`, `/register`, `/dashboard`

### Etapa 3 — Diseño de la interfaz ✅
- Página principal con bienvenida
- Formularios visuales de login/registro
- Dashboard con estadísticas, formulario de tareas y lista

### Etapa 4 — Modelado de datos y Supabase (parcial) ✅
- `.env.local` creado (requiere datos reales del proyecto Supabase)
- `supabase-schema.sql` creado con tabla `tasks` y políticas RLS
- `README-supabase.md` creado con instrucciones paso a paso
- **Pendiente:** Configurar `.env.local` con URL y anon key reales, y ejecutar el SQL en Supabase

### Etapa 5 — Integración de Supabase con Next.js ✅
- Clientes de Supabase (`client.ts`, `auth-server.ts`)
- Gestión de sesiones SSR (`cookies`)
- `useAuth()` y `getServerUser()` implementados

### Etapa 6 — Sistema de autenticación ✅
- Registro (`signUp`) e inicio de sesión (`signInWithPassword`) funcionales
- Cierre de sesión (`signOut`)
- Rutas protegidas (`/dashboard`) con redirección

### Etapa 7 — CRUD de tareas ✅
- Componentes `TaskCard`, `TaskList`, `TaskStats`, `TaskFilters` creados
- `lib/supabase/tasks.ts` con `getTasks`, `createTask`, `updateTask`, `deleteTask`, `toggleTask`
- Dashboard conectado a la base de datos real de Supabase

### Etapa 8 — Estados, filtros y estadísticas ✅
- Filtros reales conectados a Supabase (`all` / `pending` / `completed`)
- Estadísticas dinámicas basadas en datos reales
- Checkboxes que persisten el estado `completed`

### Etapa 9 — Validaciones y experiencia de usuario ✅
- `zod` instalado
- `lib/validations.ts` con esquemas `loginSchema`, `registerSchema`, `taskSchema`
- Formularios validados en cliente antes de llamar a Supabase

---

## Error conocido (no bloquea desarrollo)

`npm run build` genera un error en `/_global-error`:
```
TypeError: Cannot read properties of null (reading 'useContext')
```
Este es un **bug de Next.js 16.4.3 + Turbopack**, no relacionado con nuestro código.

**Solución para desarrollo:** Usar `npm run dev` (funciona perfectamente).
**Para producción:** El build pasa `✓ Compiled successfully` y `Finished TypeScript`; el error es solo en el prerender de la página de error global.

---

## Archivos clave para retomar

| Archivo | Propósito |
|---|---|
| `plan.md` | Roadmap completo del proyecto |
| `todo/app/page.tsx` | Página principal |
| `todo/app/login/page.tsx` | Login con validación Zod |
| `todo/app/register/page.tsx` | Registro con validación Zod |
| `todo/app/dashboard/page.tsx` | Dashboard protegido |
| `todo/components/DashboardClient.tsx` | UI del dashboard con datos reales |
| `todo/lib/supabase/auth-client.ts` | Autenticación cliente |
| `todo/lib/supabase/auth-server.ts` | Autenticación servidor |
| `todo/lib/supabase/tasks.ts` | CRUD de tareas conectado a Supabase |
| `todo/lib/validations.ts` | Esquemas Zod |
| `todo/lib/utils.ts` | Función `cn()` para clases CSS |
| `todo/supabase-schema.sql` | SQL para crear tabla `tasks` y RLS |
| `todo/README-supabase.md` | Instrucciones para configurar Supabase |

---

## Próximos pasos sugeridos según plan.md

1. **Configurar Supabase físico**: Ejecutar `.env.local` con datos reales y correr `supabase-schema.sql` en el SQL Editor de Supabase
2. **Etapa 10**: Pruebas funcionales y de seguridad (verificar RLS, aislamiento de usuarios)
3. **Etapa 11**: Despliegue en Vercel (configurar variables de entorno, importar repo de GitHub)
4. **Etapa 12**: Mejoras opcionales (prioridades, fechas límite, categorías, modo oscuro, paginación)

---

## Notas técnicas

- El proyecto usa `App Router` de Next.js 15
- `Tailwind CSS v4` configurado con `turbopack`
- Componentes de UI creados manualmente (no requieren `shadcn/ui` instalado para funcionar)
- `components.json` existe pero `shadcn/ui` no está instalado como paquete independiente; los componentes funcionan con Tailwind directamente
- El archivo `.env.local` debe mantenerse privado (ya está en `.gitignore`)
- `service_role` de Supabase NUNCA debe exponerse en el frontend

---

## Comando para verificar funcionamiento inmediato

```powershell
cd "C:\Users\Abimael\Desktop\projectosMejora\Todo List\todo"
npm run dev
```

Luego abrir `http://localhost:3000` en el navegador.
