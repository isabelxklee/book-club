import styled from 'styled-components'
import {BookCover, CloseButton} from '../../styles'

export const Panel = styled.div`
  background-color: #ffe581;
  border-left: 2px solid;
  height: 100vh;
  width: 600px;
  position: fixed;
  z-index: 1;
  right: 0;
  top: 83px;
  padding: 90px 60px;
  overflow: scroll;
`

export const Close = styled(CloseButton)`
  position: fixed;
  top: 124px;
`

export const FeaturedBookCover = styled(BookCover)`
  width: 426px;
  height: 572px;
`
