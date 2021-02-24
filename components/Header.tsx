import React from 'react'
import { css } from 'astroturf'
import Image from 'next/image'
import Svg from 'public/svg/vercel.svg'

export default function Header() {
  const s = css`
    .play {
      font-family: var(--font-playfair);
    }
    .cera {
      font-family: var(--font-cera);
    }
    .image {
      width: 200px;
      height: 200px;
      background: url(/images/watches.png) no-repeat center;
    }
  `
  
  return (
    <>
      <div className={s.play}>
        HEADER
      </div>
      <div className={s.cera}>
        HEADER
      </div>
      <Image
        src="/images/watches.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <Svg />
      <div className={s.image}>

      </div>
    </>
  )
}
