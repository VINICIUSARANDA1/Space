import React from "react";
import Tags from "./Tags";
import Title from "../Title";
import Popular from "./Popular";
import styled from "styled-components";
import ImageGallery from "./ImageGallery"


const GalleryContainer = styled.div`
  display: flex;
  gap: 24px;
`
const FluidSection = styled.section`
  flex-grow: 1;
  
`
const ImagesContainer = styled.section`
   display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;

`
export default function Gallery({ photos = [] }) {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <FluidSection>
          <Title> Navegue pela galeria</Title>
          <ImagesContainer>
          {photos.map(photo => <ImageGallery
          key={photo.id}
          photo={photo}
          />)}
          </ImagesContainer>
        </FluidSection>
        <Popular/>
      </GalleryContainer>
    </>
  );
}
