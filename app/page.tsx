'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-green-100 text-white p-4 md:p-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4 auto-rows-[200px]">
          
          {/* Hero Card - Large */}
          <div className="md:row-span-2 bg-white/70 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden border border-white/50 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-teal-50/30 backdrop-blur-sm"></div>
            <div className="relative z-10 flex flex-col items-center">
              <Image 
                src="/logo.png" 
                alt="UdeA Jobs Logo" 
                width={300} 
                height={300}
              />
              <p className="text-xl md:text-4xl text-emerald-800 font-semibold mb-2">
                Cell-Based Architecture
              </p>
            </div>
          </div>
          {/* CTA Card - GitHub Repo */}
          <a
            href="https://github.com/Team-DAS"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 bg-gradient-to-r from-emerald-800/80 to-teal-800/80 backdrop-blur-xl hover:from-emerald-900/90 hover:to-teal-900/90 rounded-3xl p-6 flex items-center justify-center transition-all hover:scale-105 cursor-pointer border border-white/30 shadow-xl"
          >
            <div className="text-center">
              <p className="text-2xl font-bold mb-1 text-white">GitHub Repository</p>
              <p className="text-sm text-emerald-50">Ver código fuente del proyecto</p>
            </div>
          </a>

          {/* Architecture Card */}
          <Link 
            href="/architecture"
            className="bg-white/60 backdrop-blur-xl hover:bg-white/70 rounded-3xl p-6 border border-white/50 transition-all hover:scale-105 cursor-pointer flex flex-col justify-center items-center text-center shadow-lg"
          >
            <div>
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-emerald-900">Arquitectura</h3>
              <p className="text-sm text-emerald-700">
                Explora el patrón cell-based
              </p>
            </div>
          </Link>


          {/* Stack Tecnológico */}
          <Link
            href="/stack"
            className="bg-white/60 backdrop-blur-xl hover:bg-white/70 rounded-3xl p-6 border border-white/50 flex flex-col justify-center items-center text-center transition-all hover:scale-105 cursor-pointer shadow-lg"
          >
            <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-lg font-semibold text-emerald-900">Stack Tecnológico</h3>
            <p className="text-sm text-emerald-700 mt-2">Ver todas las tecnologías</p>
          </Link>


          {/* Identity Cell */}
          <Link
            href="/identity-cell-architecture"
            className="md:row-start-3 bg-emerald-800/70 backdrop-blur-xl hover:bg-emerald-900/80 rounded-3xl p-6 border border-white/30 transition-all hover:scale-105 cursor-pointer flex flex-col justify-center items-center text-center shadow-lg"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">Identity Cell</h3>
            <p className="text-base md:text-lg text-emerald-100">Auth & Accounts</p>
          </Link>

          {/* Profile Cell */}
          <Link
            href="/profile-cell-architecture"
            className="col-span-2 bg-teal-800/70 backdrop-blur-xl hover:bg-teal-900/80 rounded-3xl p-6 border border-white/30 transition-all hover:scale-105 cursor-pointer flex flex-col justify-center items-center text-center shadow-lg"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">Profile Cell</h3>
            <p className="text-base md:text-lg text-teal-100">Users & Files</p>
          </Link>

          {/* Projects Cell */}
          <Link
            href="/projects-cell-architecture"
            className="bg-green-700/70 backdrop-blur-xl hover:bg-green-800/80 rounded-3xl p-6 border border-white/30 transition-all hover:scale-105 cursor-pointer flex flex-col justify-center items-center text-center shadow-lg"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">Projects Cell</h3>
            <p className="text-base md:text-lg text-green-100">Projects & Search</p>
          </Link>

          {/* Lifecycle Cell */}
          <Link
            href="/lifecycle-cell-architecture"
            className="col-span-2 bg-lime-700/70 backdrop-blur-xl hover:bg-lime-800/80 rounded-3xl p-6 border border-white/30 transition-all hover:scale-105 cursor-pointer flex flex-col justify-center items-center text-center shadow-lg"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">Lifecycle Cell</h3>
            <p className="text-base md:text-lg text-lime-100">Applications</p>
          </Link>

        </div>
      </div>
    </div>
  )
}
