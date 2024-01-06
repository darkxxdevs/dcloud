import type { Metadata } from "next"
import "./globals.css"
import { AuthProvider } from "@/context/authContext"

export const metadata: Metadata = {
  title: "dcloud",
  description: "cloud platfrom to create manage and store data and files....",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans min-h-screen bg-background antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
