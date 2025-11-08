import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedGrid from './components/FeaturedGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <FeaturedGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
