'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function GeneralArchitecture() {
  return (
    <div className="min-h-screen bg-green-100 p-4 md:p-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 text-center">
            UdeA Jobs - Arquitectura General
          </h1>
          <p className="text-lg text-emerald-800 text-center mb-6">
            Diagrama completo de la arquitectura Cell-Based del sistema
          </p>
          
          {/* Cards de navegación a cada célula */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Link
              href="/identity-cell-architecture"
              className="bg-emerald-800/70 backdrop-blur-xl hover:bg-emerald-900/80 text-white px-4 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg text-center border border-white/30"
            >
              Identity Cell
            </Link>
            <Link
              href="/profile-cell-architecture"
              className="bg-teal-800/70 backdrop-blur-xl hover:bg-teal-900/80 text-white px-4 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg text-center border border-white/30"
            >
              Profile Cell
            </Link>
            <Link
              href="/projects-cell-architecture"
              className="bg-green-700/70 backdrop-blur-xl hover:bg-green-800/80 text-white px-4 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg text-center border border-white/30"
            >
              Projects Cell
            </Link>
            <Link
              href="/lifecycle-cell-architecture"
              className="bg-lime-700/70 backdrop-blur-xl hover:bg-lime-800/80 text-white px-4 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg text-center border border-white/30"
            >
              Lifecycle Cell
            </Link>
          </div>
        </div>

        {/* Iframe con el diagrama general */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 border border-white/50 shadow-2xl mb-8">
          <iframe 
            src="https://s.icepanel.io/m2wHcs0VDGoam5/43Gk" 
            height="800" 
            width="100%" 
            title="UdeA Jobs General Architecture Diagram" 
            style={{ borderRadius: '16px', border: 'none' }}
            className="w-full"
          />
        </div>

        {/* Diagrama de despliegue GCP */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 border border-white/50 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4 text-center">
            Diagrama de Despliegue - GCP Kubernetes
          </h2>
          <div className="flex justify-center">
            <Image 
              src="/Despliegue.webp" 
              alt="Diagrama de Despliegue en GCP Kubernetes" 
              width={1000}
              height={800}
              className="rounded-2xl "
              priority
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link 
            href="/"
            className="inline-block bg-white/60 hover:bg-white/70 text-emerald-900 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 backdrop-blur-xl border border-white/50"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
