import Hero from '@/components/Hero'
import React from 'react'
import hero from '../../assets/kontakt.png'
import Contact from '@/components/Contact'

export default function page() {
  return (
    <div>
      <Hero
        title="Kontakta oss"
        image={hero}/>

        <Contact/>
    </div>
  )
}
