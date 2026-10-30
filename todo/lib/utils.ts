// Implementación simplificada de clsx + tailwind-merge
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ')
}