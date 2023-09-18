import React from 'react'
import styled from 'styled-components'
import TextField from '../TextField'


const StylizedHeader = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;

    img{
     max-width: 212px;
    }

`

export default function Header() {
  return (
    <StylizedHeader>
     <img src='/Images/logo.png' alt='Logo'></img>
     <TextField/>
    </StylizedHeader>
  )
}
