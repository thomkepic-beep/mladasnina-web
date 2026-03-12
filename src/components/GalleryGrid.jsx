import React, { useEffect, useState } from 'react'

export default function GalleryGrid({ items }) {
  const [selectedImage, setSelectedImage] = useState(null)

  const openImage = (src) => setSelectedImage(src)
  const closeImage = () => setSelectedImage(null)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.slug || item.image}
            type="button"
            onClick={() => openImage(item.image)}
            className="group relative overflow-hidden rounded-[28px] bg-slate-200 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img src={item.image} alt={item.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.05]" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <div className="font-black">{item.title}</div>
            </div>
          </button>
        ))}
      </div>

      {selectedImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-8" onClick={closeImage}>
          <button type="button" onClick={closeImage} className="absolute right-5 top-5 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
            Zavrieť ✕
          </button>
          <img src={selectedImage} alt="Galéria MP Snina" className="max-h-[80vh] max-w-full rounded-[28px] object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      ) : null}
    </>
  )
}
