import React from "react";
import ImageGallery from "../Gallery/ImageGallery";
import styled from "styled-components";



const Overlay = styled.div`
  background-color: rgba( 0,0,0,0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const DialogStylized = styled.dialog`
  position: absolute;
  top: 294px;

`
export default function ModalZoom({ photo }) {
  return (
    <>
      {photo && <>
      <Overlay />
      <DialogStylized open={!!photo}>
          <ImageGallery photo={photo} expandida={true} />
          <form method="dialog">
            <button type="submit">ok</button>
          </form>
        </DialogStylized>
        </>}
    </>
  );
}
