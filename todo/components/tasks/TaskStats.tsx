interface StatsProps {
  total?: number
  pending?: number
  completed?: number
}

export default function TaskStats({ total = 0, pending = 0, completed = 0 }: StatsProps) {
  return (
    <div className="w-full grid grid-cols-3 gap-4">
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
        <p className="text-sm text-gray-500">Total</p>
        <p className="text-3xl font-bold text-blue-700">{total}</p>
      </div>
      <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
        <p className="text-sm text-gray-500">Pendiente</p>
        <p className="text-3xl font-bold text-yellow-700">{pending}</p>
      </div>
      <div className="bg-green-50 rounded-lg p-4 border border-green-100">
        <p className="text-sm text-gray-500">Completadas</p>
        <p className="text-3xl font-bold text-green-700">{completed}</p>
      </div>
    </div>
  )
}