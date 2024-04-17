import { propsPage } from '@/interfaces'
import React from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4Subpage1 from './Page4Subpage1'
import Page4Subpage2 from './Page4Subpage2'
import Page4Subpage3 from './Page4Subpage3'

const Logged = (props: propsPage) => {
  return (
    <>
      {props.view === 'Pagina 1' ? (
        <Page1 />
      ): props.view === 'Pagina 2' ? (
        <Page2 />
      ): props.view === 'Pagina 3' ? (
        <Page3 />
      ): props.view === 'Pagina 4 SubPagina 1' ? (
        <Page4Subpage1 />
      ): props.view === 'Pagina 4 SubPagina 2' ? (
        <Page4Subpage2 />
      ): props.view === 'Pagina 4 SubPagina 3' ? (
        <Page4Subpage3 />
      ): (<></>)}
    </>
  )
}

export default Logged