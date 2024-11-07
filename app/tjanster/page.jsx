import Hero from '@/components/Hero'
import Text_block from '@/components/Text_block'
import React from 'react'
import omoss from '../../assets/tjanster.png'
import Services from '@/components/Services'
import { ServicesObject } from '../page'

function page() {
  return (
    <div>
       <Hero
        title="Våra tjanster"
        text="Vi finns med i alla typer av projekt, stora som små."
        image={omoss}
      />

      <Text_block title={'Erfarenhet som sträcker sig långt'} text={'Hos El Cures erbjuder vi ett brett spektrum av tjänster som täcker alla dina el- och säkerhetsbehov. Vår expertis inom elinstallationer, kraftdistribution och moderna kommunikationslösningar gör oss till en helhetsleverantör, oavsett om det gäller stora entreprenader eller skräddarsydda lösningar för hem och företag. Med oss får du inte bara installationsservice av hög kvalitet, utan även en partner som strävar efter långsiktig hållbarhet i varje projekt.Utforska våra olika tjänsteområden nedan och upptäck hur vi kan hjälpa dig att skapa en pålitlig, effektiv och framtidssäkrad lösning som är anpassad just för dina behov.'}
      />

      <Services services={ServicesObject} title={'Vår expertis är bred'}/>
    </div>
  )
}

export default page
