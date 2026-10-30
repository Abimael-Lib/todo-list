import { getServerUser } from '@/lib/supabase/auth-server'
import { redirect } from 'next/navigation'
import DashboardClient from '@/components/DashboardClient'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const user = await getServerUser()
  if (!user) redirect('/login')

  return <DashboardClient />
}