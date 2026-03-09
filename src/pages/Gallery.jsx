import React from 'react'
import SectionTitle from '../components/SectionTitle'
import GalleryGrid from '../components/GalleryGrid'

export default function Gallery() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle eyebrow="Galéria" title="Fotografie z aktivít a podujatí" text="Samostatná galéria s fullscreen náhľadom a preklikávaním medzi fotografiami." />
      <GalleryGrid />
    </main>
  )
}
