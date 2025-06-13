import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import GalleryPage from './pages/GalleryPage'
import Memories from './pages/Memories'
import OurStory from './pages/OurStory'
import VideoPage from './pages/VideoPage'
import WishlistPage from './pages/WishlistPage'
import LoveLetterPage from './pages/LoveLetterPage'


function App() {
  const [musicPlaying, setMusicPlaying] = useState(false)

  return (
    <Router>
      <CustomCursor />
      <Navbar musicPlaying={musicPlaying} setMusicPlaying={setMusicPlaying} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/love-letter" element={<LoveLetterPage />} />
      </Routes>
    </Router>
  )
}

export default App