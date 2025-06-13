import React from 'react'
import './MemoryTimeline.css'

const events = [
  {
    date: 'Jan 2023',
    title: 'First Meet',
    description: 'We met at a coffee shop and talked for hours',
    image: 'fotonyasolo.jpg'
  },
  {
    date: 'Mar 2023',
    title: 'First Date',
    description: 'Our official first date at the beach',
    image: 'fotodilaut.jpg'
  },
  {
    date: 'Jun 2023',
    title: 'Anniversary',
    description: 'Celebrating our first months together',
    image: 'fotokubersamanya.jpg'
  }
]

const MemoryTimeline = () => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="timeline-content">
            <div className="timeline-date">{event.date}</div>
            <h3 className="timeline-title">{event.title}</h3>
            <p className="timeline-description">{event.description}</p>
            <div className="timeline-image">
              <img src={`/images/${event.image}`} alt={event.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MemoryTimeline