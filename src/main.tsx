import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'src/App'
import GlobalProvider from 'src/settings/global.provider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
)
