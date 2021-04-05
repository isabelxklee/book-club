import styled from 'styled-components'

export const Container = styled.div`
  justify-self: center;

  @media (max-width: 800px) {
    justify-self: unset;
  }
`

export const BookTitle = styled.h3`
  font-size: 28px;
  font-family: 'Work Sans', sans-serif;
  margin: 16px 0;

  @media (max-width: 800px) {
    font-size: 22px;
    margin: 8px 0;
  }
`
