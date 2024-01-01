import Hero from './components/Hero'

import './App.css'
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Footer />
      </div>
    </main>
  )
}

export default App