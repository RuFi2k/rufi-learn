import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {
  children: JSX.Element
}

const ScrollLayout = ({ children }: Props): JSX.Element => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <>
    {children}
  </>
}

export default ScrollLayout