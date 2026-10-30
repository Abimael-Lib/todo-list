'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

type FilterType = 'all' | 'pending' | 'completed'

export default function TaskFilters({ onSelectFilter }: { onSelectFilter?: (filter: FilterType) => void }) {
  const [currentFilter, setCurrentFilter] = useState<FilterType>('all')

  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'Todas' },
    { value: 'pending', label: 'Pendientes' },
    { value: 'completed', label: 'Completadas' },
  ]

  return (
    <div className="w-full flex gap-2 justify-center">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={currentFilter === filter.value ? 'default' : 'outline'}
          size="sm"
          onClick={() => { setCurrentFilter(filter.value); onSelectFilter?.(filter.value) }}
          className="font-semibold text-sm"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  )
}