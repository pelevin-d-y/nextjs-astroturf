import React from 'react'
import { css } from 'astroturf'

type MainProps = {
  children: React.ReactNode
}

const Main = ({children}: MainProps) => {
  return (
    <div>
      {children}
    </div>
  )
}


export default Main
