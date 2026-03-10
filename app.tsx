import React from 'react';
import { IdeUI } from './ide-UI';
import { ThemeProvider } from './Dark/Light-mode';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <IdeUI />
      </div>
    </ThemeProvider>
  );
}

export default App;
