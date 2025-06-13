import React from 'react'
import './VideoGallery.css'

const videos = [
  {
    id: 1,
    title: 'Special Moments',
    src: 'vidiobersamanya.mp4',
    thumbnail: 'fotokubersamanya.jpg'
  },
  {
    id: 2,
    title: 'Old Memories',
    src: 'vidiolama.mp4',
    thumbnail: 'fotodilaut.jpg'
  },
  {
    id: 3,
    title: 'Beautiful You',
    src: 'vidionyayangcantik.mp4',
    thumbnail: 'fotonyayangpalingimut.jpg'
  }
]

const VideoGallery = () => {
  return (
    <div className="video-gallery">
      <h2>Our Video Memories</h2>
      <div className="video-grid">
        {videos.map(video => (
          <div key={video.id} className="video-item">
            <video 
              controls 
              poster={`/images/${video.thumbnail}`}
              className="video-player"
            >
              <source src={`/videos/${video.src}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoGallery