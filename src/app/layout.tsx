import type { Metadata } from "next"
import { AuthContextProvider } from "@/context/authContext"
import "./globals.css"

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
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  )
}
