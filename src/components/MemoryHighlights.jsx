import React from 'react'
import './MemoryHighlights.css'

// Contoh di MemoryHighlights.jsx
const highlights = [
  { image: '/images/abinyayanggantteng.jpg', caption: 'Abinya yang ganteng 🥰' },
  { image: '/images/atthebeach.jpg', caption: 'Main dipantai dengan mu sayang' },
  { image: '/images/cantikdanganteng.jpg', caption: 'Kita paling cocok 💕' },
  { image: '/images/fotoberduamomendikelas.jpg', caption: 'Momen berdua di kelas' },
  { image: '/images/fotodilaut.jpg', caption: 'Our first beach vacation' },
  { image: '/images/fotokubersamanya.jpg', caption: 'Date night celebration' },
  { image: '/images/fotonyasolo.jpg', caption: 'Kamu pas sendiri, tetep cakep!' },
  { image: '/images/gantengdancantik.jpg', caption: 'Pasangan paling serasi' },
  { image: '/images/imutt2.jpg', caption: 'Your most adorable moment' },
  { image: '/images/ISTRIKUAHAHH.jpg', caption: 'Istriku ahhh 😍' },
  { image: '/images/lucunyaaaa.jpg', caption: 'Lucunyaaaa kamu tuh' },
  { image: '/images/malamyangindah.jpg', caption: 'Malam yang gak terlupakan' },
  { image: '/images/momenspecial2.jpg', caption: 'Momen spesial kita 1' },
  { image: '/images/momenspecial3.jpg', caption: 'Momen spesial kita 2' },
  { image: '/images/momenspecial4.jpg', caption: 'Momen spesial kita 3' },
  { image: '/images/momenspecial5.jpg', caption: 'Momen spesial kita 4' },
  { image: '/images/momenspecial6.jpg', caption: 'Momen spesial kita 5' },
  { image: '/images/senyumsakit.jpg', caption: 'Masih bisa senyum walau sakit' },
  { image: '/images/tangannyadengantanganku.jpg', caption: 'Genggaman hangat' },
];

const MemoryHighlights = () => {
  return (
    <div className="memory-highlights">
      {highlights.map((item, index) => (
        <div key={index} className="highlight-item">
          <img src={item.image} alt={item.caption} />
          <p>{item.caption}</p>
        </div>
      ))}
    </div>
  )
}

export default MemoryHighlights