import React from "react";
import Tags from "./Tags";
import Title from "../Title";
import Popular from "./Popular";
import styled from "styled-components";
import ImageGallery from "./ImageGallery"


const GalleryContainer = styled.div`
  display: flex;
`
const FluidSection = styled.section`
  flex-grow: 1;
`
export default function Gallery({ photos = [] }) {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <FluidSection>
          <Title> Navegue pela galeria</Title>
          {photos.map(photo => <ImageGallery
          key={photo.id}
          photo={photo}
          />)}
        </FluidSection>
        <Popular/>
      </GalleryContainer>
    </>
  );
}
