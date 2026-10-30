import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import type { Task } from '@/types'
import { deleteTask, toggleTask } from '@/lib/supabase/tasks'
import { useState } from 'react'

interface TaskCardProps {
  task: Task
  onUpdate?: () => void
}

export default function TaskCard({ task, onUpdate }: TaskCardProps) {
  const [loading, setLoading] = useState(false)

  const handleToggle = async () => {
    setLoading(true)
    try {
      await toggleTask(task.id, !task.completed)
      onUpdate?.()
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    setLoading(true)
    try {
      await deleteTask(task.id)
      onUpdate?.()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="mb-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
      <CardContent className="p-4 flex items-center gap-4">
        <Checkbox
          checked={task.completed}
          onChange={() => handleToggle()}
          disabled={loading}
        />
        <span className={`flex-1 font-medium ${task.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>
          {task.title}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleDelete}
          disabled={loading}
          className="text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          Eliminar
        </Button>
      </CardContent>
    </Card>
  )
}