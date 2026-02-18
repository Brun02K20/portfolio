"use client"

import "@/lib/i18n"

type I18nProviderProps = {
  children: React.ReactNode
}

export default function I18nProvider({ children }: I18nProviderProps) {
  return <>{children}</>
}