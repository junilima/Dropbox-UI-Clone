import React, { useEffect, useState } from 'react'

import { Container } from './styles'

const scrollThreshold = 300

const SideMenu = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)
  const [isActive, setIsActive] = useState(false)

  function onScroll() {
    setScrollY(window.scrollY)
    setIsActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const classes = [
    isActive ? 'open' : '',
    scrollY <= scrollThreshold ? 'scrollOpen' : '',
  ]
  const className = classes.join(' ').trim()

  function toggleActiveMenu() {
    setIsActive((prev) => !prev)
  }

  window.toggleActiveMenu = toggleActiveMenu

  return <Container className={className}>{children}</Container>
}

export default SideMenu
