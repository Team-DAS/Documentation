'use client'

import Link from 'next/link'

export default function LifecycleCellArchitecture() {
  return (
    <div className="min-h-screen bg-green-100 p-4 md:p-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 text-center">
            Lifecycle Cell - Architecture
          </h1>
          <p className="text-lg text-emerald-800 text-center mb-6">
            Diagrama de componentes y arquitectura de la célula Lifecycle
          </p>
          
          {/* Card para ir a documentación API */}
          <div className="flex justify-center mb-6">
            <Link
              href="/lifecycle-cell"
              target="_blank"
              className="bg-lime-700/70 backdrop-blur-xl hover:bg-lime-800/80 text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-105 shadow-xl flex items-center gap-3 border border-white/30"
            >
              <span className="text-2xl">📚</span>
              <div>
                <div className="font-bold text-lg">API Documentation</div>
                <div className="text-sm text-lime-100">Ver documentación de API</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Iframe con el diagrama */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 border border-white/50 shadow-2xl">
          <iframe 
            src="https://s.icepanel.io/m2wHcs0VDGoam5/JNlh" 
            height="800" 
            width="100%" 
            title="Lifecycle Cell Architecture Diagram" 
            style={{ borderRadius: '16px', border: 'none' }}
            className="w-full"
          />
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
