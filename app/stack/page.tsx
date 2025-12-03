'use client'

import Link from 'next/link'
import  StackIcon  from 'tech-stack-icons'
import Image from 'next/image'
import argocd from '../assets/argocd.svg'


export default function StackPage() {
  return (
    <div className="min-h-screen bg-green-100 p-4 md:p-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 text-center">
            Stack Tecnológico
          </h1>
          <p className="text-lg text-emerald-800 text-center mb-8">
            Tecnologías y herramientas utilizadas en UdeA Jobs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Backend & APIs */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl">
            <h2 className="text-2xl font-bold text-emerald-900 mb-6 text-center">
              Backend & APIs
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:scale-110 transition-transform">
                <StackIcon name="spring" className="w-20 h-20" />
                <span className="text-sm text-emerald-900 font-semibold">Spring Boot</span>
              </a>
              <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:scale-110 transition-transform">
                <StackIcon name="python" className="w-20 h-20" />
                <span className="text-sm text-emerald-900 font-semibold">FastAPI</span>
              </a>
              <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:scale-110 transition-transform">
                <StackIcon name="expressjs" className="w-20 h-20" />
                <span className="text-sm text-emerald-900 font-semibold">Express.js</span>
              </a>
            </div>
          </div>

          {/* Bases de Datos */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl">
            <h2 className="text-2xl font-bold text-emerald-900 mb-6 text-center">
              Bases de Datos
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:scale-110 transition-transform">
                <StackIcon name="postgresql" className="w-20 h-20" />
                <span className="text-sm text-emerald-900 font-semibold">PostgreSQL</span>
              </a>
              <a href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:scale-110 transition-transform">
                <StackIcon name="mongodb" className="w-20 h-20" />
                <span className="text-sm text-emerald-900 font-semibold">MongoDB</span>
              </a>
              <a href="https://opensearch.org/docs/latest/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:scale-110 transition-transform">
                <div className="w-20 h-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#ed1944" d="M123.885 111.93v-.03a1.74 1.74 0 0 0-.46-1.264 2.043 2.043 0 0 0-1.48-.52h-2.037v5.44h1.124v-1.813h.689l1.003 1.813h1.294l-1.16-2.025a1.644 1.644 0 0 0 1.027-1.601zm-1.137.036a.786.786 0 0 1-.888.816h-.834v-1.644h.81c.604 0 .912.272.912.816zm4.612.973a5.56 5.56 0 1 0-5.56 5.566 5.567 5.567 0 0 0 5.56-5.566zm-5.56 4.194a4.195 4.195 0 1 1 4.194-4.194 4.195 4.195 0 0 1-4.195 4.194zm-34.935-65.71h25.155v25.155H86.865Zm-86.225 0h25.155v25.155H.64Zm86.225 36.33a5.603 5.603 0 0 1-5.597 5.597H31.386a5.603 5.603 0 0 1-5.597-5.597V83.77H.64v24.382a10.378 10.378 0 0 0 10.347 10.353h90.662a10.384 10.384 0 0 0 10.401-10.353V83.77H86.865Zm14.802-78.258H11.006A10.378 10.378 0 0 0 .658 19.842V44.23h25.15v-3.983a5.597 5.597 0 0 1 5.596-5.597h49.882a5.597 5.597 0 0 1 5.597 5.597v3.983h25.167V19.842a10.384 10.384 0 0 0-10.383-10.347Z"/></svg>
                </div>
                <span className="text-sm text-emerald-900 font-semibold">OpenSearch</span>
              </a>
              <a href="https://www.rabbitmq.com/docs" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:scale-110 transition-transform">
                <div className="w-20 h-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#ff6600" d="M119.517 51.188H79.291a3.641 3.641 0 0 1-3.64-3.642V5.62A5.605 5.605 0 0 0 70.028 0H55.66a5.606 5.606 0 0 0-5.627 5.62v41.646a3.913 3.913 0 0 1-3.92 3.925l-13.188.047c-2.176 0-3.972-1.75-3.926-3.926l.094-41.687A5.606 5.606 0 0 0 23.467 0H9.1a5.61 5.61 0 0 0-5.626 5.625V122.99c0 2.737 2.22 5.01 5.01 5.01h111.033a5.014 5.014 0 0 0 5.008-5.011V56.195a4.975 4.975 0 0 0-5.008-5.007zM100.66 95.242a6.545 6.545 0 0 1-6.525 6.524H82.791a6.545 6.545 0 0 1-6.523-6.524V83.9a6.545 6.545 0 0 1 6.523-6.524h11.343a6.545 6.545 0 0 1 6.525 6.523zm0 0"/></svg>
                </div>
                <span className="text-sm text-emerald-900 font-semibold">RabbitMQ</span>
              </a>
            </div>
          </div>

          {/* DevOps & Cloud */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl">
            <h2 className="text-2xl font-bold text-emerald-900 mb-6 text-center">
              DevOps & Cloud
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <a href="https://docs.docker.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:scale-110 transition-transform">
                <StackIcon name="docker" className="w-20 h-20" />
                <span className="text-sm text-emerald-900 font-semibold">Docker</span>
              </a>
              <a href="https://kubernetes.io/docs/home/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:scale-110 transition-transform">
                <StackIcon name="kubernetes" className="w-20 h-20" />
                <span className="text-sm text-emerald-900 font-semibold">Kubernetes</span>
              </a>
              <a href="https://helm.sh/docs/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:scale-110 transition-transform">
                <div className="w-20 h-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#0F1689" d="M35.5 30.5c-.2-.1-.3-.3-.5-.4-3.2-3.1-5.7-6.8-7.2-11.1-.4-1.2-.7-2.4-.7-3.7v-.4c.1-1.7 1.2-2.5 2.8-2.1.5.1 1 .3 1.4.6 1.8.9 3.2 2.2 4.5 3.7 2.3 2.5 4.2 5.5 5.5 8.7 0 .1.1.2.1.2s.1.1.2.1c6.2-3.8 13.3-6.1 20.6-6.5-.1-.2-.1-.4-.1-.6-.7-3.1-1-6.4-.7-9.6.1-1.9.5-3.8 1.1-5.7.3-1 .8-1.8 1.4-2.6.2-.3.5-.5.8-.7.6-.4 1.4-.4 2 0 .6.4 1.1 1 1.5 1.7.6 1.2 1.1 2.5 1.3 3.8.6 2.8.8 5.7.5 8.6-.1 1.7-.4 3.5-.9 5.2 1.8.3 3.6.6 5.4 1 1.8.4 3.5.9 5.2 1.6 1.7.6 3.4 1.4 5 2.2 1.6.8 3.1 1.8 4.7 2.7.1-.1.1-.2.2-.4 1.7-4.7 4.6-8.9 8.4-12.2.9-.8 1.9-1.4 3-1.8.3-.1.6-.2.9-.2 1.6-.2 2.3.8 2.4 2.1.1.9 0 1.8-.2 2.7-.6 2.3-1.5 4.4-2.7 6.4-1.7 2.9-3.8 5.4-6.4 7.5-.1.1-.2.1-.3.3 2.5 2.4 4.8 5.1 6.8 8-.2 0-.3.1-.4.1H93c-.3 0-.6-.2-.8-.4-5.9-6.6-13.8-10.8-22.4-12.1-2.5-.4-5.1-.5-7.7-.3-7.6.5-15 3.4-20.9 8.3-1.5 1.2-3 2.6-4.3 4.1-.2.3-.6.5-1 .5h-8.3c.2-.6 1.7-2.8 3.5-4.8 1.5-1.6 2.9-3 4.4-4.5zm65.4 58.9c-1.8 2.6-3.8 4.9-6.1 7.1.2.2.3.3.5.4 3.9 3.3 6.9 7.6 8.6 12.5.4 1.2.6 2.5.6 3.7 0 .3-.1.6-.2 1-.3.9-1.2 1.5-2.1 1.3-.6-.1-1.2-.3-1.7-.5-.8-.4-1.6-.9-2.3-1.5-3.8-3.2-6.7-7.4-8.4-12.1-.1-.1-.1-.3-.2-.5-2 1.4-4.1 2.6-6.3 3.6s-4.5 1.9-6.8 2.5c-2.4.6-4.7 1.1-7.2 1.4.1.2.1.4.1.6.8 3.1 1 6.3.8 9.5-.1 2-.5 3.9-1.1 5.8-.3.8-.7 1.5-1.1 2.3-.2.3-.4.5-.6.8-1 1.1-2.2 1.1-3.2 0-.4-.4-.7-.9-1-1.5-.8-1.5-1.2-3.1-1.5-4.8-.4-2.3-.5-4.6-.4-6.9.1-1.7.3-3.4.7-5 0-.1.1-.3.1-.4 0 0 0-.1-.1-.2-7.3-.4-14.3-2.6-20.6-6.5l-.3.6c-1.8 4.2-4.4 7.9-7.8 10.8-.9.8-1.9 1.4-3 1.8-.5.2-1.1.3-1.6.2-.6-.1-1.1-.5-1.4-1.2-.4-.9-.3-1.8-.2-2.7.2-1.3.6-2.5 1.1-3.7 1.5-3.7 3.9-7 6.7-9.8.1-.1.2-.2.4-.3 0-.1.1-.1.1-.2-2.7-2.4-5.2-5.1-7.2-8.1.3 0 .4-.1.6-.1h8c.4 0 .7.2.9.4 2.9 3.1 6.3 5.6 10 7.5 3.9 2.1 8.2 3.4 12.6 3.8 12 1.2 22.3-2.5 30.9-11.1.4-.4.9-.7 1.5-.6h8.1l.1.1zm-11.1-39c.7 0 1.4.1 2.1 0 .8-.1 1.3.2 1.9.7 3.2 3 6.4 6 9.7 9l.5.5c.2-.2.4-.3.6-.5 3.3-3.1 6.7-6.2 9.9-9.3.3-.3.7-.4 1.1-.4h2.5v27.4c-.4.1-6.3.2-7 0V63.9l-.1-.1c-2.3 2.1-4.6 4.3-6.9 6.4-2.3-2.2-4.6-4.3-7-6.4l-.1.1v14h-7c-.2-.5-.3-25.9-.2-27.5zm-64.2 0h6.9c.2.5.2 26.8 0 27.4h-6.9c-.1-1.7 0-3.5 0-5.2v-5.2H17v10.3c-.5.2-6.4.2-7 0V50.4h7v9.7c.5.2 7.8.2 8.6 0v-9.7zm15.2 27.4V50.5c.4-.1 15.6-.2 16.6-.1v5.8c-.2 0-.5.1-.7.1h-8.9v4.5h8.5v6h-8.4c-.2.5-.2 4.1-.1 5.1.2 0 .5.1.7.1h8.9v5.8H40.8zm24.6 0c-.1-.7-.1-26.9 0-27.4h6.9v20.2c.3 0 .5 0 .8.1H82v7.2l-16.6-.1z"/></svg>         
                </div>
                <span className="text-sm text-emerald-900 font-semibold">Helm</span>
              </a>
              <a href="https://cloud.google.com/docs" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:scale-110 transition-transform">
                <StackIcon name="gcloud" className="w-20 h-20" />
                <span className="text-sm text-emerald-900 font-semibold">Google Cloud</span>
              </a>
              <a href="https://developer.hashicorp.com/terraform/docs" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:scale-110 transition-transform">
                 <div className="w-20 h-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fillRule="evenodd"><path d="M77.941 44.5v36.836L46.324 62.918V26.082zm0 0" fill="#5c4ee5"/><path d="M81.41 81.336l31.633-18.418V26.082L81.41 44.5zm0 0" fill="#4040b2"/><path d="M11.242 42.36L42.86 60.776V23.941L11.242 5.523zm0 0M77.941 85.375L46.324 66.957v36.82l31.617 18.418zm0 0" fill="#5c4ee5"/></g></svg>
                </div>
                <span className="text-sm text-emerald-900 font-semibold">Terraform</span>
              </a>
              <a href="https://argo-cd.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:scale-110 transition-transform">
                <div className="w-20 h-20 flex items-center justify-center">
                    <Image
                        src={argocd}
                        alt="ArgoCD Logo"
                        width={80}
                        height={80}
                    />
                </div>
                <span className="text-sm text-emerald-900 font-semibold">ArgoCD</span>
              </a>
              <a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:scale-110 transition-transform">
                 <div className="w-20 h-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#2088ff" d="M26.666 0C11.97 0 0 11.97 0 26.666c0 12.87 9.181 23.651 21.334 26.13v37.87c0 11.77 9.68 21.334 21.332 21.334h.195c1.302 9.023 9.1 16 18.473 16C71.612 128 80 119.612 80 109.334s-8.388-18.668-18.666-18.668c-9.372 0-17.17 6.977-18.473 16h-.195c-8.737 0-16-7.152-16-16V63.779a18.514 18.514 0 0 0 13.24 5.555h2.955c1.303 9.023 9.1 16 18.473 16 9.372 0 17.169-6.977 18.47-16h11.057c1.303 9.023 9.1 16 18.473 16 10.278 0 18.666-8.39 18.666-18.668C128 56.388 119.612 48 109.334 48c-9.373 0-17.171 6.977-18.473 16H79.805c-1.301-9.023-9.098-16-18.471-16s-17.171 6.977-18.473 16h-2.955c-6.433 0-11.793-4.589-12.988-10.672 14.58-.136 26.416-12.05 26.416-26.662C53.334 11.97 41.362 0 26.666 0zm0 5.334A21.292 21.292 0 0 1 48 26.666 21.294 21.294 0 0 1 26.666 48 21.292 21.292 0 0 1 5.334 26.666 21.29 21.29 0 0 1 26.666 5.334zm-5.215 7.541C18.67 12.889 16 15.123 16 18.166v17.043c0 4.043 4.709 6.663 8.145 4.533l13.634-8.455c3.257-2.02 3.274-7.002.032-9.045l-13.635-8.59a5.024 5.024 0 0 0-2.725-.777zm-.117 5.291 13.635 8.588-13.635 8.455V18.166zm40 35.168a13.29 13.29 0 0 1 13.332 13.332A13.293 13.293 0 0 1 61.334 80 13.294 13.294 0 0 1 48 66.666a13.293 13.293 0 0 1 13.334-13.332zm48 0a13.29 13.29 0 0 1 13.332 13.332A13.293 13.293 0 0 1 109.334 80 13.294 13.294 0 0 1 96 66.666a13.293 13.293 0 0 1 13.334-13.332zm-42.568 6.951a2.667 2.667 0 0 0-1.887.78l-6.3 6.294-2.093-2.084a2.667 2.667 0 0 0-3.771.006 2.667 2.667 0 0 0 .008 3.772l3.974 3.96a2.667 2.667 0 0 0 3.766-.001l8.185-8.174a2.667 2.667 0 0 0 .002-3.772 2.667 2.667 0 0 0-1.884-.78zm48 0a2.667 2.667 0 0 0-1.887.78l-6.3 6.294-2.093-2.084a2.667 2.667 0 0 0-3.771.006 2.667 2.667 0 0 0 .008 3.772l3.974 3.96a2.667 2.667 0 0 0 3.766-.001l8.185-8.174a2.667 2.667 0 0 0 .002-3.772 2.667 2.667 0 0 0-1.884-.78zM61.334 96a13.293 13.293 0 0 1 13.332 13.334 13.29 13.29 0 0 1-13.332 13.332A13.293 13.293 0 0 1 48 109.334 13.294 13.294 0 0 1 61.334 96zM56 105.334c-2.193 0-4 1.807-4 4 0 2.195 1.808 4 4 4s4-1.805 4-4c0-2.193-1.807-4-4-4zm10.666 0c-2.193 0-4 1.807-4 4 0 2.195 1.808 4 4 4s4-1.805 4-4c0-2.193-1.807-4-4-4zM56 108c.75 0 1.334.585 1.334 1.334 0 .753-.583 1.332-1.334 1.332-.75 0-1.334-.58-1.334-1.332 0-.75.585-1.334 1.334-1.334zm10.666 0c.75 0 1.334.585 1.334 1.334 0 .753-.583 1.332-1.334 1.332-.75 0-1.332-.58-1.332-1.332 0-.75.583-1.334 1.332-1.334z"/><path fill="#79b8ff" d="M109.334 90.666c-9.383 0-17.188 6.993-18.477 16.031a2.667 2.667 0 0 0-.265-.011l-2.7.09a2.667 2.667 0 0 0-2.578 2.751 2.667 2.667 0 0 0 2.752 2.578l2.7-.087a2.667 2.667 0 0 0 .097-.006C92.17 121.029 99.965 128 109.334 128c10.278 0 18.666-8.388 18.666-18.666s-8.388-18.668-18.666-18.668zm0 5.334a13.293 13.293 0 0 1 13.332 13.334 13.29 13.29 0 0 1-13.332 13.332A13.293 13.293 0 0 1 96 109.334 13.294 13.294 0 0 1 109.334 96z"/></svg>
                </div>
                <span className="text-sm text-emerald-900 font-semibold">GitHub Actions</span>
              </a>
            </div>
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
