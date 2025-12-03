'use client'

import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'
import { useState } from 'react'

export default function LifecycleCellReferences() {
  const [activeTab] = useState<'applications-api'>('applications-api')

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
        .api-tab.active {
          color: var(--scalar-color-accent);
          border-bottom-color: var(--scalar-color-accent);
        }
      `}</style>

      <div className="api-tabs">
        <button
          className={`api-tab ${activeTab === 'applications-api' ? 'active' : ''}`}
        >
          Applications API
        </button>
      </div>

      <div className="w-full">
        <ApiReferenceReact
          configuration={{
            url: 'https://api.udeajobs.dev/lifecycle-cell/applications/docs',
            servers: [
              {
                url: 'https://api.udeajobs.dev/lifecycle-cell/applications',
                description: 'Production Server',
              },
            ],
          }}
        />
      </div>
    </div>
  )
}
