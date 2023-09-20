import React from "react";
import styled from "styled-components";
import ItemNavigation from "./ItemNavigation";




const StylizedSideList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export default function SideList() {
  return (
    <aside>
      <nav>
        <StylizedSideList>
            <ItemNavigation
              IconActive="/icones/home-ativo.png"
              IconInactive="/icones/home-inativo.png"
              Active={true}
            > Inicio
            </ItemNavigation>

            <ItemNavigation
              IconActive="/icones/mais-vistas-ativo.png"
              IconInactive="/icones/mais-vistas-inativo.png"
            > Mais vistos
            </ItemNavigation>
        </StylizedSideList>
      </nav>
    </aside>
  );
}
