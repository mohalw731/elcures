import Hero from '@/components/Hero'
import React from 'react'
import omoss from '../../assets/omoss.png'
import Text_block from '@/components/Text_block'
import About_us from '@/components/About_us'
import about from '../../assets/about.png'

export default function page() {
  return (
    <div>
      <Hero
        title="Om oss"
        text="Vi på El Cures hjälper till med allt från service till installationer"
        image={omoss}
      />

      <Text_block title={'Vi är El Cures'} text={'El Cures grundades 2015 och har vuxit snabbt tack vare våra kunders förtroende. För oss handlar det om att skapa värde och se till att varje elinstallation är genomtänkt och säkert utförd – precis som vi själva skulle vilja ha det i våra egna hem. Vårt mål är att leverera elinstallationer som både vi och våra kunder kan vara stolta över, oavsett om det gäller mindre uppdrag eller omfattande entreprenader.'}
      />
      <About_us image={about} title={'Vår filosofi'} text='Vårt mål är att alltid erbjuda moderna lösningar som är hållbara för miljön och säker för kunden. Våra medarbetare är vår största styrka och vi ser till att de har tillgång till rätt verktyg och bra arbetsförhållanden. Detta återspeglas i allt vi gör, från våra snyggt folierade bilar till vårt fokus på kvalitet och noggrannhet i alla uppdrag. ' />
    </div>
  )
}
