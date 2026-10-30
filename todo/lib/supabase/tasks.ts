import { createClient } from './client'
import type { Task } from '@/types'

export async function getTasks(filter?: 'all' | 'pending' | 'completed'): Promise<Task[]> {
  const supabase = createClient()
  let query = supabase.from('tasks').select('*').order('created_at', { ascending: false })

  if (filter === 'pending') query = query.eq('completed', false)
  if (filter === 'completed') query = query.eq('completed', true)

  const { data, error } = await query
  if (error) throw error
  return (data || []) as Task[]
}

export async function createTask(title: string, description?: string): Promise<Task> {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('No authenticated user')
  const { data, error } = await supabase
    .from('tasks')
    .insert({ title, description, completed: false, user_id: user.id })
    .select()
    .single()

  if (error) throw error
  return data as Task
}

export async function updateTask(id: string, updates: Partial<Omit<Task, 'id' | 'user_id'>>): Promise<Task> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('tasks')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data as Task
}

export async function deleteTask(id: string): Promise<void> {
  const supabase = createClient()
  const { error } = await supabase.from('tasks').delete().eq('id', id)
  if (error) throw error
}

export async function toggleTask(id: string, completed: boolean): Promise<Task> {
  return updateTask(id, { completed })
}