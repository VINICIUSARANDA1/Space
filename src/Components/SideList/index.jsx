import React from "react";
import styled from "styled-components";


const StylizedSideList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

export default function SideList() {
  return (
    <aside>
    <nav>
    <StylizedSideList>
      <li>
        <a href="#">Inicio</a>
      </li>
      <li>
        <a href="#">Mais vistas</a>
      </li>
      <li>
        <a href="#">Mais Curtidas</a>
        <li>
        <a href="#">Novas</a>
      </li>
      <li>
        <a href="#">Supreenda-me</a>
      </li>
      </li>
      </StylizedSideList>
    </nav>
    </aside>
  );
}
