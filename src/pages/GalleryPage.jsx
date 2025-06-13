import React from 'react'
import Gallery from '../components/Gallery'
import FloatingHearts from '../components/FloatingHearts'

const GalleryPage = () => {
  return (
    <div className="page-container">
      <FloatingHearts />
      <h1 className="page-title">Our Memories</h1>
      <Gallery />
    </div>
  )
}

export default GalleryPage