import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Head from './components/head'
import Mission from './components/mission'


const About = () => {
  return (
    <>
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Head/>
      <Mission/>

      <Footer/>
    </main>
    </>
  )
}

export default About
