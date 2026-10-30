# Configuración de Supabase — MVP Todo List

## Paso 1: Crear proyecto en Supabase
1. Ve a https://supabase.com/ y crea una cuenta (o inicia sesión)
2. Crea un nuevo proyecto con los siguientes datos:
   - **Nombre**: `todo-list-app`
   - **Contraseña de base de datos**: (elige una segura)
3. Una vez creado, ve al panel del proyecto y copia:
   - `Project URL` (ej. `https://xxxxx.supabase.co`)
   - `anon public` (clave pública)

## Paso 2: Configurar variables de entorno
Copia estas variables en tu archivo `.env.local` en esta carpeta:

```
NEXT_PUBLIC_SUPABASE_URL=<tu-project-url>
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<tu-anon-public-key>
```

## Paso 3: Crear la tabla `tasks`
1. En el panel de Supabase, ve a `SQL Editor`
2. Abre el archivo `supabase-schema.sql` que está junto a este README
3. Copia todo el contenido y pégalo en el editor SQL
4. Haz clic en `Run`

Esto creará:
- La tabla `tasks` con todas las columnas (id, user_id, title, description, completed, fechas)
- Las políticas RLS (cada usuario solo ve/modifica/elimina sus propias tareas)

## Paso 4: Verificar que RLS está activo
Después de correr el SQL, verifica en `Table Editor` > `tasks` que:
- La columna `user_id` existe
- `Row Level Security` está habilitado (`Enabled`)

## Paso 5: Probar la autenticación con la base de datos
1. Regístrate en la aplicación (`/register`)
2. Inicia sesión (`/login`)
3. Ve al dashboard (`/dashboard`)
4. Crea una tarea y verifica que se guarda en la tabla `tasks` de Supabase con tu `user_id`

## Notas importantes
- Nunca expongas la clave `service_role` en el frontend o `.env.local`
- Las políticas RLS son obligatorias para la seguridad del MVP
- Si necesitas resetear la base de datos, solo vuelve a correr el archivo `supabase-schema.sql`
