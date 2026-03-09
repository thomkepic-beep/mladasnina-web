import React, { useEffect, useState } from 'react'
import { gallery } from '../data'

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState(null)

  const openImage = (index) => setSelectedImage(index)
  const closeImage = () => setSelectedImage(null)

  const showPrevImage = () => {
    setSelectedImage((prev) => {
      if (prev === null) return null
      return (prev - 1 + gallery.length) % gallery.length
    })
  }

  const showNextImage = () => {
    setSelectedImage((prev) => {
      if (prev === null) return null
      return (prev + 1) % gallery.length
    })
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImage === null) return
      if (event.key === 'Escape') closeImage()
      if (event.key === 'ArrowLeft') showPrevImage()
      if (event.key === 'ArrowRight') showNextImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => openImage(index)}
            className="group relative overflow-hidden rounded-[28px] bg-slate-200 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img src={src} alt={`Fotografia z aktivity MP Snina ${index + 1}`} className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.05]" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <div className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">Otvoriť galériu</div>
            </div>
          </button>
        ))}
      </div>

      {selectedImage !== null ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-8" onClick={closeImage}>
          <button type="button" onClick={closeImage} className="absolute right-5 top-5 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
            Zavrieť ✕
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); showPrevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-2xl font-bold text-white backdrop-blur transition hover:bg-white/20">
            ‹
          </button>
          <div className="max-h-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[selectedImage]} alt={`Galéria MP Snina ${selectedImage + 1}`} className="max-h-[80vh] w-auto max-w-full rounded-[28px] object-contain shadow-2xl" />
            <div className="mt-4 text-center text-sm font-medium text-slate-200">Fotografia {selectedImage + 1} z {gallery.length}</div>
          </div>
          <button type="button" onClick={(e) => { e.stopPropagation(); showNextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-2xl font-bold text-white backdrop-blur transition hover:bg-white/20">
            ›
          </button>
        </div>
      ) : null}
    </>
  )
}
