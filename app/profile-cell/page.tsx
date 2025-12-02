'use client'

import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'
import { useState, useEffect } from 'react'

const GRAPHQL_ENDPOINT = 'https://api.udeajobs.dev/profile-cell/dashboard/graphql'

export default function ProfileCellReferences() {
  const [activeTab, setActiveTab] = useState<
    'file-api' | 'profile-service' | 'graphql-dashboard'
  >('profile-service')

  useEffect(() => {
    if (activeTab === 'graphql-dashboard') {
      // Cargar CSS
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = '//cdn.jsdelivr.net/npm/graphql-playground-react/build/static/css/index.css'
      document.head.appendChild(link)

      // Cargar JS
      const script = document.createElement('script')
      script.src = '//cdn.jsdelivr.net/npm/graphql-playground-react/build/static/js/middleware.js'
      script.onload = () => {
        if ((window as any).GraphQLPlayground) {
          const playgroundElement = document.getElementById('playground-profile')
          if (playgroundElement) {
            ;(window as any).GraphQLPlayground.init(playgroundElement, {
              endpoint: GRAPHQL_ENDPOINT,
            })
          }
        }
      }
      document.body.appendChild(script)

      return () => {
        document.head.removeChild(link)
        document.body.removeChild(script)
      }
    }
  }, [activeTab])

  return (
    <div className="w-full">
      <style jsx>{`
        .api-tabs {
          display: flex;
          background: var(--scalar-background-1);
          border-bottom: 1px solid var(--scalar-border-color);
          position: sticky;
          top: 0;
          z-index: 100;
          padding: 0 12px;
        }
        .api-tab {
          padding: 12px 16px;
          font-size: 14px;
          font-weight: 500;
          color: var(--scalar-color-2);
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: var(--scalar-font-family);
        }
        .api-tab:hover {
          color: var(--scalar-color-1);
          background: var(--scalar-background-2);
        }
        .api-tab.active {
          color: var(--scalar-color-accent);
          border-bottom-color: var(--scalar-color-accent);
        }
        .graphql-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 56px);
          padding: 48px;
          background: var(--scalar-background-1);
        }
        .graphql-card {
          background: var(--scalar-background-2);
          border: 1px solid var(--scalar-border-color);
          border-radius: 8px;
          padding: 48px;
          text-align: center;
          max-width: 500px;
        }
        .graphql-title {
          font-size: 24px;
          font-weight: 600;
          color: var(--scalar-color-1);
          margin-bottom: 16px;
          font-family: var(--scalar-font-family);
        }
        .graphql-description {
          font-size: 14px;
          color: var(--scalar-color-2);
          margin-bottom: 32px;
          line-height: 1.6;
          font-family: var(--scalar-font-family);
        }
        .graphql-button {
          background: var(--scalar-color-accent);
          color: white;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 500;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: var(--scalar-font-family);
        }
        .graphql-button:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
      `}</style>

      <div className="api-tabs">
         <button
          onClick={() => setActiveTab('profile-service')}
          className={`api-tab ${
            activeTab === 'profile-service' ? 'active' : ''
          }`}
        >
          Profile Service
        </button>
        <button
          onClick={() => setActiveTab('file-api')}
          className={`api-tab ${activeTab === 'file-api' ? 'active' : ''}`}
        >
          File API
        </button>
        <button
          onClick={() => setActiveTab('graphql-dashboard')}
          className={`api-tab ${
            activeTab === 'graphql-dashboard' ? 'active' : ''
          }`}
        >
          GraphQL Dashboard
        </button>
      </div>

      <div className="w-full">
        {activeTab === 'profile-service' && (
          <ApiReferenceReact
            configuration={{
              url: 'https://api.udeajobs.dev/profile-cell/profiles/docs',
              servers: [
                {
                  url: 'https://api.udeajobs.dev/profile-cell/profiles',
                  description: 'Production Server',
                },
              ],
            }}
          />
        )}
        {activeTab === 'file-api' && (
          <ApiReferenceReact
            configuration={{
              url: 'https://api.udeajobs.dev/profile-cell/files/docs',
              servers: [
                {
                  url: 'https://api.udeajobs.dev/profile-cell/file',
                  description: 'Production Server',
                },
              ],
            }}
          />
        )}


        {activeTab === 'graphql-dashboard' && (
          <div 
            id="playground-profile" 
            style={{ width: '100%', height: 'calc(100vh - 56px)' }}
          />
        )}
      </div>
    </div>
  )
}
