'use client'

import { Hero } from '../components/Hero'
import { VideoIntroduction } from '../components/VideoIntroduction'
import { Statistics } from '../components/Statistics'
import { ResourceCenter } from '../components/ResourceCenter'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Login } from '../components/Login'
import { AuthProvider, useAuth } from '../contexts/AuthContext'

function ProtectedApp() {
  const { isAuthenticated, login } = useAuth()

  if (!isAuthenticated) {
    return <Login onLogin={login} />
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20"> {/* Add back padding for fixed header */}
        <Hero />
        <VideoIntroduction />
        <Statistics />
        <ResourceCenter />
        <Footer />
      </div>
    </main>
  )
}

export default function Home() {
  return (
    <AuthProvider>
      <ProtectedApp />
    </AuthProvider>
  )
}