import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Head from './components/head'
import Mission from './components/mission'
import Contact from './components/Contact'

const About = () => {
  return (
    <>
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Head/>
      <Mission/>
      <Contact/>

      
      <Footer/>
    </main>
    </>
  )
}

export default About
