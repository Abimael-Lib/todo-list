import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-blue-700">
          Todo List App
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Una aplicación web de gestión de tareas con autenticación de usuarios.
          Organiza tu día, crea tareas, filtra y visualiza tu progreso de manera simple y rápida.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link href="/register">
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg rounded-xl shadow-lg transition-transform hover:scale-105">
              Registrarse
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl shadow-lg transition-transform hover:scale-105">
              Iniciar Sesión
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}