import styled from 'styled-components'
import {BookCover, CloseButton, P} from '../../styles'

export const Panel = styled.div`
  background-color: #ffe581;
  border-left: 2px solid;
  height: calc(100vh - 270px);
  width: 440px;
  position: fixed;
  z-index: 1;
  right: 0;
  top: 0;
  padding: 150px 60px 120px 60px;
  overflow: scroll;
`

export const Close = styled(CloseButton)`
  position: fixed;
  top: 124px;
  z-index: 3;
`

export const FeaturedBookCover = styled(BookCover)`
  width: 100%;
  height: 572px;
  margin: 30px 0;
`

export const StyledP = styled(P)`
  margin-bottom: 30px;
`
