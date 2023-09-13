import React, { useEffect } from 'react'
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Footer from './Components/Footer';
import Aos from 'aos';
import "aos/dist/aos.css";
import Projects from './Components/Projects/Projects';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    body1: {
      fontFamily: 'Heebo',
      fontWeight: 400,
      fontSize: "1rem",
    },
    h5: {
      fontFamily: 'Bona Nova',
      fontWeight: 400,
    }
  }
})

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <Home />
      <div data-aos="zoom-in-up"><About /></div>
      <div data-aos="zoom-in-up"><Services /></div>
      {/* <div data-aos="zoom-in-down"> <Projects /></div> */}
      <div data-aos="fade-in"><Contact /></div>
      <Footer />
    </ThemeProvider>
  )
}

export default App;
