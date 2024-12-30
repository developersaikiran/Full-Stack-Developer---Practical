import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import ThemeProvider from './contexts/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider> */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
    {/* </Provider> */}
  </StrictMode>,
)
