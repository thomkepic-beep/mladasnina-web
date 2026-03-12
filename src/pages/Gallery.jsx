import React from 'react'
import ContactSection from '../components/ContactSection'
import GalleryGrid from '../components/GalleryGrid'
import SectionTitle from '../components/SectionTitle'
import { galleryAlbums } from '../data'

export default function Gallery() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="Galéria"
          title="Fotografie z podujatí a aktivít MP Snina"
          text="V galérii nájdeš fotografie z podujatí a aktivít Mládežníckeho parlamentu Snina."
        />

        <div className="mt-10">
          <GalleryGrid items={galleryAlbums} />
        </div>
      </main>

      <ContactSection />
    </>
  )
}
