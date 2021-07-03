import React from 'react'

import GlobalStyles from './styles/GlobalStyles'

import data from './data'
import SideMenu from './components/SideMenu'
import MenuForm from './components/MenuForm'
import Section from './components/Section'

function App() {
  return (
    <>
      {data.map((item) => (
        <Section
          variant={item.variant}
          title={item.title}
          description={item.description}
        />
      ))}

      <SideMenu>
        <MenuForm />
      </SideMenu>

      <GlobalStyles />
    </>
  )
}

export default App
