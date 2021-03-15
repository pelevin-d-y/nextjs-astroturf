import React from 'react'
import { css } from 'astroturf'
import Image from 'next/image'
import classNames from 'classnames'
import NextLink from 'next/link'
import Search from './Search'

const Header = (): JSX.Element => (
  <header className={classNames(styles.header)}>
    <div className={classNames('container', styles.container)}>
      <div className={styles.menu}>Menu</div>
      <div className={styles.logo}>
        <NextLink href="/">
          <a>
            <Image
              src="/images/main-section.jpg"
              alt="Logo"
              width={264}
              height={66}
            />
          </a>
        </NextLink>
      </div>
      <div className={styles.profile}>
        <div>
          <Search />
        </div>
        <div className={styles.link}>
          <NextLink href="/sign-up">
            <a className={styles.profileLink}>Sign up</a>
          </NextLink>
        </div>
      </div>
    </div>
  </header>
)

const styles = css`
  .header {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;

    width: 100%;
    padding-top: 35px;
  }

  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }

  .menu {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    line-height: 14px;
    color: inherit;
    cursor: pointer;
  }

  .profile {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .profileLink {
    padding: 10px 22px;
    border: 1px solid var(--black);
    color: inherit;
    text-decoration: none;
  }
`

export default Header
