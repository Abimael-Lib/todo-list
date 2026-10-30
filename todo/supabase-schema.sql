-- Esquema para la tabla tasks
CREATE TABLE IF NOT EXISTS tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Políticas RLS (Row Level Security)
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- SELECT: los usuarios solo pueden ver sus propias tareas
CREATE POLICY select_own_tasks ON tasks
  FOR SELECT USING (auth.uid() = user_id);

-- INSERT: los usuarios solo pueden insertar tareas con su propio user_id
CREATE POLICY insert_own_tasks ON tasks
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- UPDATE: los usuarios solo pueden actualizar sus propias tareas
CREATE POLICY update_own_tasks ON tasks
  FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- DELETE: los usuarios solo pueden eliminar sus propias tareas
CREATE POLICY delete_own_tasks ON tasks
  FOR DELETE USING (auth.uid() = user_id);
