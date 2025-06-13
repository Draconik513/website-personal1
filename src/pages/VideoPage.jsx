import React from 'react'
import './VideoPage.css'

const videos = [
  { id: 1, title: 'Bersama Dia', filename: 'vidiobersamanya.mp4' },
  { id: 2, title: 'Kenangan Lama', filename: 'vidiolama.mp4' },
  { id: 3, title: 'Cantiknya Dia', filename: 'vidionyayangcantik.mp4' }
]

const VideoPage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Our Videos</h1>
      <div className="video-grid">
        {videos.map(video => (
          <div key={video.id} className="video-card">
            <video controls className="video-player">
              <source src={`/videos/${video.filename}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoPage