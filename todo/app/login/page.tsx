'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { signIn } from '@/lib/supabase/auth-client'
import Link from 'next/link'
import { loginSchema } from '@/lib/validations'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const parsed = loginSchema.safeParse({ email, password })
    if (!parsed.success) {
      setError(parsed.error.issues?.[0]?.message || 'Datos inválidos')
      return
    }

    setLoading(true)
    try {
      await signIn(parsed.data.email, parsed.data.password)
      router.replace('/dashboard')
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An error occurred during sign-in'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <Card className="w-full max-w-md shadow-xl border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-extrabold text-blue-700">Iniciar Sesión</CardTitle>
          <p className="text-gray-500 text-sm">Accede a tu cuenta para gestionar tus tareas.</p>
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
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-md transition-colors"
            >
              {loading ? 'Cargando...' : 'Iniciar Sesión'}
            </Button>
          </form>
          <div className="text-center text-sm text-gray-500">
            ¿No tienes cuenta?{" "}
            <Link href="/register" className="text-blue-600 hover:underline font-medium">Regístrate</Link>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}