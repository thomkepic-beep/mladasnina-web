import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Activities from './pages/Activities'
import Events from './pages/Events'
import News from './pages/News'
import Gallery from './pages/Gallery'
import Join from './pages/Join'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nas" element={<About />} />
        <Route path="/cinnosti" element={<Activities />} />
        <Route path="/podujatia" element={<Events />} />
        <Route path="/novinky" element={<News />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/pridaj-sa" element={<Join />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
