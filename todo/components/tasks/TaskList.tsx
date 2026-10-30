import TaskCard from './TaskCard'
import type { Task } from '@/types'

export default function TaskList({ tasks, onUpdate }: { tasks: Task[]; onUpdate?: () => void }) {
  return (
    <div className="w-full">
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center py-8">No hay tareas. ¡Crea una nueva!</p>
      ) : (
        tasks.map((task) => <TaskCard key={task.id} task={task} onUpdate={onUpdate} />)
      )}
    </div>
  )
}