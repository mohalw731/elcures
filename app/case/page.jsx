import Hero from '@/components/Hero'
import Text_block from '@/components/Text_block'
import React from 'react'
import omoss from '../../assets/case.png'
import Case from '@/components/Case'
import { CasesObject } from '../page'

export default function page() {
  return (
    <div>
             <Hero
        title="Referensuppdrag"
        text="Ta del av några projekt vi arbetar med idag."
        image={omoss}
      />

<Case cases={CasesObject}  title={'Några utvalda uppdrag'}/>
    </div>
  )
}
