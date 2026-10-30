'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { signUp } from '@/lib/supabase/auth-client'
import Link from 'next/link'
import { registerSchema } from '@/lib/validations'

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const parsed = registerSchema.safeParse({ email, password, confirmPassword })
    if (!parsed.success) {
      setError(parsed.error.issues?.[0]?.message || 'Datos inválidos')
      return
    }

    setLoading(true)
    try {
      await signUp(parsed.data.email, parsed.data.password)
      router.replace('/login')
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An error occurred during sign-up'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <Card className="w-full max-w-md shadow-xl border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-extrabold text-blue-700">Crear Cuenta</CardTitle>
          <p className="text-gray-500 text-sm">Únete hoy y comienza a organizar tus tareas.</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
            <Input
              type="password"
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={loading}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-md transition-colors"
            >
              {loading ? 'Cargando...' : 'Registrarse'}
            </Button>
          </form>
          <div className="text-center text-sm text-gray-500">
            ¿Ya tienes cuenta?{" "}
            <Link href="/login" className="text-blue-600 hover:underline font-medium">Inicia sesión</Link>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}