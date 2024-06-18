import React, { useEffect } from 'react'
// import Header from './Header'
// import Footer from './Footer'
import { ThemeProvider } from '@emotion/react'
import BaseTheme from '../utills/theme'

const Layout = ({children}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <ThemeProvider theme={BaseTheme}>
    {/* <Header/> */}
    {children}
    {/* <Footer/> */}
    </ThemeProvider>
    </>
  )
}

export default Layout