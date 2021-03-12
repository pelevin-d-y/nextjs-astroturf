import React, { useState, useRef } from 'react'
import { css } from 'astroturf'
import SearchIcon from 'public/svg/search.svg'

import classNames from 'classnames'
import useOnClickOutside from 'helpers/hooks/use-outside-click'

interface Props {
  className?: string
}

const Search: React.FC<Props> = ({ className }) => {
  const [isActive, setIsActive] = useState(false)
  const ref = useRef(null)
  const handleClickOutside = () => {
    setIsActive(false)
  }
  useOnClickOutside(ref, handleClickOutside)

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div
        className={classNames(styles.inputWrapper, isActive && styles.active)}
      >
        <div className={styles.image}>
          <SearchIcon
            alt="Logo"
            onClick={() => {
              setIsActive(true)
            }}
          />
        </div>
        <input
          className={classNames(styles.input)}
          ref={ref}
          type="text"
          maxLength={60}
        />
      </div>
    </div>
  )
}

const styles = css`
  .wrapper {
    position: relative;
  }
  .inputWrapper {
    position: absolute;
    top: -15px;
    right: 0;

    display: flex;
    flex-flow: row nowrap;
    width: 18px;
  }

  .inputWrapper.active {
    width: 178px;
  }

  .image {
    margin-top: 6px;
    flex: 1 0 auto;
  }

  .input {
    padding: 5px 0 5px 0;
    width: 100%;
    margin-left: 11px;

    color: var(--white);
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--white);
    outline: none;
  }
  .input.active {
    width: 152px;
    padding: 5px 8px 5px 8px;
  }
`

export default Search
