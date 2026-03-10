import React, { useState } from 'react';
import { LanguageCard } from './Cards';
import { ThemeToggle } from './Dark/Light-mode';
import { allLanguages } from './languages-index';

export const IdeUI: React.FC = () => {
  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="container is-fluid p-0">
      {/* AVISK Header */}
      <nav className="navbar is-dark is-spaced">
        <div className="navbar-brand">
          <b className="navbar-item is-size-4 has-text-weight-bold" style={{ letterSpacing: '2px' }}>
            AVISK <span className="tag is-info is-small ml-2">v1.0</span>
          </b>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="section">
        {!selected ? (
          <div className="container">
            <h2 className="subtitle has-text-centered mb-6">Select Environment</h2>
            <div className="columns is-multiline">
              {allLanguages.map((lang) => (
                <LanguageCard 
                  key={lang.name} 
                  name={lang.name} 
                  iconClass={lang.iconClass} 
                  onSelect={() => setSelected(lang)} 
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="box p-0" style={{ height: '75vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div className="p-3 is-flex is-justify-content-space-between has-background-grey-darker has-text-white">
              <button className="button is-small is-danger is-outlined" onClick={() => setSelected(null)}>
                Exit Editor
              </button>
              <span className="is-family-monospace">{selected.name} Editor — AVISK</span>
              <button className="button is-small is-success">Run Code</button>
            </div>
            <textarea 
              className="textarea is-family-monospace" 
              style={{ 
                flex: 1, 
                borderRadius: 0, 
                backgroundColor: '#1a1a1a', 
                color: '#00ff41', // Matrix/Hacker green for that smart look
                padding: '20px',
                border: 'none',
                resize: 'none'
              }}
              defaultValue={selected.boilerplate}
              spellCheck="false"
            />
          </div>
        )}
      </div>
    </div>
  );
};
