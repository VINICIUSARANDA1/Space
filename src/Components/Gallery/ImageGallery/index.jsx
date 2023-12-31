import React from "react";
import styled from "styled-components";
import ButtonIcons from "../../ButtonIcons";

const Figure = styled.figure`
  width: ${props => props.$expandida ? "90%" : "460px"};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
    
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function ImageGallery({ photo, expandida=false, onRequestedZoom }) {
  return (
    <Figure $expandida={expandida} id={`foto-${photo.id}`}>
      <img src={photo.path} alt={photo.alt} />
      <figcaption>
        <h3> {photo.titulo}</h3>
        <Footer>
          <h4>{photo.fonte}</h4>
          <ButtonIcons>
            <img src="/icones/favorito.png" alt="Icone Favorito" />
          </ButtonIcons>
          {!expandida && 
            <ButtonIcons arial-hidden={expandida} onClick={()=> onRequestedZoom(photo) }>
              <img src="/icones/expandir.png" alt="Icone de expandir" />
            </ButtonIcons>
          }
        </Footer>
      </figcaption>
    </Figure>
  )
}
