import { Suspense, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ConfigProvider, Spin } from 'antd'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import MainContent from './layouts/MainContent/MainContent'
import SocketProvider from './contexts/SocketProvider'
import ThemeProvider, { ThemeContext } from './contexts/ThemeProvider'
import "./assets/stylesheets/styles.css";
import { router } from './router'

function App() {
  const {
    theme,
    themePlate,
  } = useContext(ThemeContext)

  // // SET THEME START
  // useEffect(() => {
  //   document.getElementsByTagName("html")[0].dataset.theme = theme;
  // }, [theme]);

  return (
    <div >
      <SocketProvider>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Nunito, Segoe UI, Arial, sans-serif",
            }
          }}
        >
          <RouterProvider router={router} />
        </ConfigProvider>
      </SocketProvider>
    </div>
  )
}

export default App
