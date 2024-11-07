import Hero from '@/components/Hero'
import React from 'react'
import omoss from '../../assets/omoss.png'
import Text_block from '@/components/Text_block'

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
    </div>
  )
}
