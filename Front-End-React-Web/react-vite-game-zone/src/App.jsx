import { Suspense, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Spin } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import MainContent from './containers/MainContent/MainContent'
import SocketProvider from './contexts/SocketProvider'
import ThemeProvider, { ThemeContext } from './contexts/ThemeProvider' 

function App() {
  // const {
  //   theme,
  //   themePlate,
  // } = useContext(ThemeContext)

  // // SET THEME START
  // useEffect(() => {
  //   document.getElementsByTagName("html")[0].dataset.theme = theme;
  // }, [theme]);

  return (
    <div >
      <ThemeProvider>
        <SocketProvider>
          <MainContent />
        </SocketProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
