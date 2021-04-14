import React, {useState, useRef} from 'react'
import {Input, SearchContainer, Icon, Wrapper} from './styles'
import {Close} from '../../styles'

const Search = ({filterBooks}) => {
  const inputEl = useRef(null)
  const [showOnDesktop, setShowOnDesktop] = useState(false)

  const handleChange = (event) => {
    filterBooks(event.target.value)
  }

  const showSearch = () => {
    setShowOnDesktop(true)
  }

  const clearSearch = () => {
    filterBooks('')
    setShowOnDesktop(false)
    inputEl.current.value = ''
  }

  return (
    <Wrapper>
      <SearchContainer $showOnDesktop={showOnDesktop}>
        <Icon onClick={showSearch} />
        <Input ref={inputEl} type="text" name="search" onChange={handleChange} autoComplete="off" />
        <Close onClick={clearSearch} />
      </SearchContainer>
    </Wrapper>
  )
}

export default Search
