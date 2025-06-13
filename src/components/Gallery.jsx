import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Gallery.css'

const images = [
  // Foto-foto sebelumnya
  'fotodilaut.jpg',
  'fotokakiku_dengandia.jpg',
  'fotokerenkudengandia.jpg',
  'fotokubersamanya.jpg',
  'fotokudengandia.jpg',
  'fotonyasolo.jpg',
  'fotonyayangpalingimut.jpg',
  'fotoprofilataunavbar.jpg',
  'gantengdancantik.jpg',
  'HUJAN.jpg',
  'inijugafavorit.jpg',
  'ISTRIKUAHAHH.jpg',
  'senyumsakit.jpg',
  
  // Dari Screenshot 2025-05-09 071514.png
  '550D8F88-840E-4FAF-A4C2-E334673D0149.jpg',
  '706457DD-20DA-464A-97BD-0E8E51F6350F.jpg',
  'D621CDD6-647D-496F-B4DA-5B6E11D0D4B4.jpg',
  'C8B9D24D-324A-47B8-81C2-5962F5394D68.jpg',
  'D1F8303C-5169-4B99-B833-5C17E22DD14F.jpg',
  'IMG_3859.PNG',
  
  // Dari image.png
  'IMG_8547.PNG',
  'SalinandariDSC_0278.JPG',  // Disebut sebagai salinan di IMG_8547.PNG
  'DA6F1901-297E-4DC9-9F75-85B92684A557.JPG',
  'BFBD89D0-8768-49E8-AD0F-6DD62F778507.jpg',
  '21F7A997-9A60-43B9-A16F-EC6743C0C7FE.jpg',
  'IMG_8554.PNG',
  '42FCE387-5583-4964-A0A0-DCDC537D193D.jpg',
  
  // Tambahan jika ada yang terlewat
  // (Tambahkan di sini jika masih ada yang kurang)
];

// Catatan: 
// - IMG_7810.HEIC muncul di kedua file
// - DSC_0278.JPG disebut sebagai salinan dalam deskripsi IMG_8547.PNG
// - Beberapa file memiliki informasi metadata yang tidak lengkap

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedImg(img)}
          >
            <img 
              src={`/images/${img}`} 
              alt={`Memory ${index + 1}`} 
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {selectedImg && (
        <div className="image-modal" onClick={() => setSelectedImg(null)}>
          <motion.img 
            src={`/images/${selectedImg}`} 
            alt="Selected" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </div>
      )}
    </div>
  )
}

export default Gallery