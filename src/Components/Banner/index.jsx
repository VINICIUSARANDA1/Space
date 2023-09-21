import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../../assets/banner.png'


const StaticBanner = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
      /* Sozinho */
    margin-left: 24em;
    margin-top: -20em
`

const TextBanner = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`

export default function Banner({text}) {
  return (
    <StaticBanner $backgroundImage={backgroundImage}>
        <TextBanner>{text}</TextBanner>
    </StaticBanner>
  )
}
