'use client'

import { useState, useEffect, useCallback } from 'react'
import TaskList from '@/components/tasks/TaskList'
import TaskStats from '@/components/tasks/TaskStats'
import TaskFilters from '@/components/tasks/TaskFilters'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { getTasks, createTask } from '@/lib/supabase/tasks'
import { taskSchema } from '@/lib/validations'
import type { Task } from '@/types'

export default function DashboardClient() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTitle, setNewTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all')

  const loadTasks = useCallback(async (f?: 'all' | 'pending' | 'completed') => {
    setLoading(true)
    try {
      const data = await getTasks(f)
      setTasks(data)
    } catch (e) {
      console.error('Error cargando tareas', e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const run = async () => {
      await loadTasks(filter)
    }
    run()
  }, [loadTasks, filter])

  const handleCreate = async () => {
    const parsed = taskSchema.safeParse({ title: newTitle.trim(), description: undefined })
    if (!parsed.success) {
      alert(parsed.error.issues?.[0]?.message || 'Datos inválidos')
      return
    }
    setLoading(true)
    try {
      await createTask(parsed.data.title)
      setNewTitle('')
      await loadTasks(filter)
    } catch (e) {
      console.error('Error creando tarea', e)
    } finally {
      setLoading(false)
    }
  }

  const stats = {
    total: tasks.length,
    pending: tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) => t.completed).length,
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold text-blue-700">Mis Tareas</h1>
          <p className="text-gray-500 text-sm">Administra y organiza tus tareas diarias.</p>
        </div>
        <TaskStats total={stats.total} pending={stats.pending} completed={stats.completed} />
        <div className="flex w-full space-x-3">
          <Input
            type="text"
            placeholder="Nueva tarea..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
            disabled={loading}
            className="flex-1 rounded-lg border-gray-300"
          />
          <Button
            onClick={handleCreate}
            disabled={loading || !newTitle.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-sm transition-colors"
          >
            {loading ? 'Guardando...' : 'Agregar'}
          </Button>
        </div>
        <TaskFilters onSelectFilter={(f) => setFilter(f)} />
        <TaskList tasks={tasks} onUpdate={() => loadTasks(filter)} />
      </div>
    </main>
  )
}